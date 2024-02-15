import { MailerService } from '@nestjs-modules/mailer';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { AdminsRole } from 'src/admins-roles/adminsRole.entity';
import { CommonService } from 'src/common/common.service';
import { Forgot } from 'src/forgot/forgot.entity';
import { Repository } from 'typeorm';
import { Admin } from './admins.entity';
const otpGenerator = require('otp-generator');
import generator = require('generate-password');
import { Categories } from 'src/categories/categories.entity';

@Injectable()
export class AdminsService extends TypeOrmCrudService<Admin> {
    private roleRepository: Repository<AdminsRole> = null;
    private repository: Repository<Admin> = null;
    private forgotRepository: Repository<Forgot> = null;
    private categoriesRepository: Repository<Categories> = null;
    constructor(
        @InjectRepository(Admin) adminsRepository: Repository<Admin>,
        @InjectRepository(Forgot) forgotsRepository: Repository<Forgot>,
        @InjectRepository(AdminsRole) adminRolesRepository: Repository<AdminsRole>,
        @InjectRepository(Categories) categoriesRepository: Repository<Categories>,
        private readonly mailerService: MailerService,
        private readonly commonService: CommonService,
    ) {
        super(adminsRepository);
        this.repository = adminsRepository;
        this.roleRepository = adminRolesRepository;
        this.forgotRepository = forgotsRepository;
        this.categoriesRepository = categoriesRepository;
    }

    async me(id: any): Promise<any> {
        try {
            const data = await this.repository.findOne(id);
            const role = await this.roleRepository.findOne(data.adminsRoleId);
            Object.assign(data, { 'adminsRole': role });
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async login(admin: any): Promise<any> {
        const payload = { id: admin.id, email: admin.email, full_name: admin.fullName, role: admin.adminsRole.name };
        return {
            access_token: this.commonService.jwtSignup(payload),
        };
    }

    async validateAdmin(emailAddress: string, pass: string): Promise<any> {
        const admin = await this.findOne({ where: { email: emailAddress }, relations: ['adminsRole'] });
        if (admin) {
            if (admin.enabled) {
                const match = await this.commonService.compareHash(pass, admin.password);
                if (match) {
                    const { password, ...result } = admin;
                    return result;
                }
                throw new ForbiddenException('Password does not match');
            }
            throw new ForbiddenException('Access forbidden');
        } else {
            throw new ForbiddenException('Invalid username');
        }
    }

    async forget(email: any): Promise<any> {
        const response = {
            mailStatus: '',
            flash: false,
            message: 'Invalid request',
            responseCode: 400,
        };
        try {
            const sessionId = generator.generate({
                length: 16,
                numbers: true,
            });
            const admin = await this.repository.findOne({ email: email });
            const adminName = admin.fullName;
            const id = admin.id;
            const adminExist = await this.forgotRepository.findOne({ userId: id })
            if (adminExist) {
                let checkExpiry = new Date(adminExist.createdTimestamp);
                checkExpiry.setMinutes(checkExpiry.getMinutes() + 5)
                if (checkExpiry < new Date()) {
                    await this.forgotRepository.delete({ id: adminExist.id })
                    const paswordResetLink =
                        'http://192.168.0.105/#/login?id=' + id + '&sessionId=' + sessionId;
                    await this.mailerService
                        .sendMail({
                            to: email, // list of receivers
                            from: 'no-reply@algoocean.com', // sender address
                            subject: 'Admin Password Reset ✔', // Subject line
                            text: '', // plaintext body
                            html:
                                '<b>Dear </b>' +
                                adminName +
                                ', your password reset link is: ' +
                                paswordResetLink +
                                '. This link is valid for 15 minutes. Please click on the link to reset your password', // HTML body content
                        })
                        .then(() => {
                            response.mailStatus = 'Mail Sent SuccessFully';
                            console.log('success');
                        })
                        .catch((error) => {
                            response.mailStatus = 'Error sending mail';
                            console.log('error' + error);
                        });
                    const forgot = await this.forgotRepository.save({
                        userId: id,
                        sessionId: sessionId
                    })
                    response.flash = true;
                    response.responseCode = 200;
                    response.message = 'Password reset link sent via email';
                }
            } else {
                const paswordResetLink =
                    'http://192.168.0.105/#/login?id=' + id + '&sessionId=' + sessionId;
                await this.mailerService
                    .sendMail({
                        to: email, // list of receivers
                        from: 'no-reply@algoocean.com', // sender address
                        subject: 'Admin Password Reset ✔', // Subject line
                        text: '', // plaintext body
                        html:
                            '<b>Dear </b>' +
                            adminName +
                            ', your password reset link is: ' +
                            paswordResetLink +
                            '. This link is valid for 15 minutes. Please click on the link to reset your password', // HTML body content
                    })
                    .then(() => {
                        response.mailStatus = 'Mail Sent SuccessFully';
                        console.log('success');
                    })
                    .catch((error) => {
                        response.mailStatus = 'Error sending mail';
                        console.log('error' + error);
                    });
                const forgot = await this.forgotRepository.save({
                    userId: id,
                    sessionId: sessionId
                })
                response.flash = true;
                response.responseCode = 200;
                response.message = 'Password reset link sent via email';
            }
        } catch (error) {
            console.log(error);
            response.message = 'Failed to register';
        }
        return response;
    }

    async resetPassword(params: any): Promise<any> {
        const response = {
            mailStatus: '',
            flash: false,
            message: 'Invalid request',
            responseCode: 400,
        };
        try {
            const linkData = await this.forgotRepository.findOne({
                where: {
                    userId: params.userId,
                    sessionId: params.sessionId,
                    consumed: false
                },
            });
            if (linkData != null) {
                let checkExpiry = new Date(linkData.createdTimestamp);
                checkExpiry.setMinutes(checkExpiry.getMinutes() + 5)
                if (checkExpiry < new Date()) {
                    response.flash = true;
                    response.responseCode = 300;
                    response.message = 'Link Expired';
                } else {
                    const password = params.password;
                    const encryptedPassword = await this.commonService.getHash(password);
                    await this.repository.update(
                        { id: params.userId },
                        { password: encryptedPassword },
                    );
                    await this.forgotRepository.update(
                        { userId: params.userId },
                        { consumed: true },
                    );
                    response.flash = true;
                    response.responseCode = 200;
                    response.message = 'Password updated successfully';
                }
            }
        } catch (error) {
            console.log(error);
        }
        return response;
    }

    async checkLink(params: any): Promise<any> {
        const response = {
            mailStatus: '',
            flash: false,
            message: 'Invalid request',
            responseCode: 400,
        };
        try {
            const data = await this.forgotRepository.findOne({
                userId: params.userId,
                sessionId: params.sessionId,
                consumed: false
            });
            let checkExpiry = new Date(data.createdTimestamp);
            checkExpiry.setMinutes(checkExpiry.getMinutes() + 5)
            if (data != null) {
                if (checkExpiry < new Date()) {
                    response.responseCode = 300;
                    response.flash = true;
                    response.message = "Link expired";
                } else {
                    response.responseCode = 200;
                    response.flash = true;
                    response.message = "Link not expired";
                }
            } else {
                response.responseCode = 400;
                response.flash = true;
                response.message = "invalid link";
            }
        } catch (error) {
            console.log(error);
        }
        return response;
    }

    async changePassword(params: any, decodedUser: any): Promise<any> {
        const response = {
            message: "Invalid request",
            responseCode: 400,
        };
        try {
            const admin = await this.repository.findOne({ id: decodedUser.id });
            const adminPassword = await this.commonService.getHash(
                params.oldPassword
            );
            const newPassword = await this.commonService.getHash(
                params.newPassword
            );
            const check = await this.commonService.compareHash(params.oldPassword, admin.password);
            if (check) {
                // const newPassword = await bcrypt.hash(params.newPassword,10);
                const newPassword = await this.commonService.getHash(params.newPassword);
                await this.repository.update(
                    { id: admin.id },
                    { password: newPassword }
                );
                response.message = "Password updated";
                response.responseCode = 200;
            } else {
                response.message = "Password does not match";
                response.responseCode = 300;
            }
        } catch (error) {
            console.log(error);
            response.message = "Error while updating";
        }
        return response;
    }
}

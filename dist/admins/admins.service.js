"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminsService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const crud_typeorm_1 = require("@nestjsx/crud-typeorm");
const adminsRole_entity_1 = require("../admins-roles/adminsRole.entity");
const common_service_1 = require("../common/common.service");
const forgot_entity_1 = require("../forgot/forgot.entity");
const typeorm_2 = require("typeorm");
const admins_entity_1 = require("./admins.entity");
const otpGenerator = require('otp-generator');
const generator = require("generate-password");
const categories_entity_1 = require("../categories/categories.entity");
let AdminsService = class AdminsService extends crud_typeorm_1.TypeOrmCrudService {
    constructor(adminsRepository, forgotsRepository, adminRolesRepository, categoriesRepository, mailerService, commonService) {
        super(adminsRepository);
        this.mailerService = mailerService;
        this.commonService = commonService;
        this.roleRepository = null;
        this.repository = null;
        this.forgotRepository = null;
        this.categoriesRepository = null;
        this.repository = adminsRepository;
        this.roleRepository = adminRolesRepository;
        this.forgotRepository = forgotsRepository;
        this.categoriesRepository = categoriesRepository;
    }
    async me(id) {
        try {
            const data = await this.repository.findOne(id);
            const role = await this.roleRepository.findOne(data.adminsRoleId);
            Object.assign(data, { 'adminsRole': role });
            return data;
        }
        catch (error) {
            console.log(error);
        }
    }
    async login(admin) {
        const payload = { id: admin.id, email: admin.email, full_name: admin.fullName, role: admin.adminsRole.name };
        return {
            access_token: this.commonService.jwtSignup(payload),
        };
    }
    async validateAdmin(emailAddress, pass) {
        const admin = await this.findOne({ where: { email: emailAddress }, relations: ['adminsRole'] });
        if (admin) {
            if (admin.enabled) {
                const match = await this.commonService.compareHash(pass, admin.password);
                if (match) {
                    const { password } = admin, result = __rest(admin, ["password"]);
                    return result;
                }
                throw new common_1.ForbiddenException('Password does not match');
            }
            throw new common_1.ForbiddenException('Access forbidden');
        }
        else {
            throw new common_1.ForbiddenException('Invalid username');
        }
    }
    async forget(email) {
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
            const adminExist = await this.forgotRepository.findOne({ userId: id });
            if (adminExist) {
                let checkExpiry = new Date(adminExist.createdTimestamp);
                checkExpiry.setMinutes(checkExpiry.getMinutes() + 5);
                if (checkExpiry < new Date()) {
                    await this.forgotRepository.delete({ id: adminExist.id });
                    const paswordResetLink = 'http://192.168.0.105/#/login?id=' + id + '&sessionId=' + sessionId;
                    await this.mailerService
                        .sendMail({
                        to: email,
                        from: 'no-reply@algoocean.com',
                        subject: 'Admin Password Reset ✔',
                        text: '',
                        html: '<b>Dear </b>' +
                            adminName +
                            ', your password reset link is: ' +
                            paswordResetLink +
                            '. This link is valid for 15 minutes. Please click on the link to reset your password',
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
                    });
                    response.flash = true;
                    response.responseCode = 200;
                    response.message = 'Password reset link sent via email';
                }
            }
            else {
                const paswordResetLink = 'http://192.168.0.105/#/login?id=' + id + '&sessionId=' + sessionId;
                await this.mailerService
                    .sendMail({
                    to: email,
                    from: 'no-reply@algoocean.com',
                    subject: 'Admin Password Reset ✔',
                    text: '',
                    html: '<b>Dear </b>' +
                        adminName +
                        ', your password reset link is: ' +
                        paswordResetLink +
                        '. This link is valid for 15 minutes. Please click on the link to reset your password',
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
                });
                response.flash = true;
                response.responseCode = 200;
                response.message = 'Password reset link sent via email';
            }
        }
        catch (error) {
            console.log(error);
            response.message = 'Failed to register';
        }
        return response;
    }
    async resetPassword(params) {
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
                checkExpiry.setMinutes(checkExpiry.getMinutes() + 5);
                if (checkExpiry < new Date()) {
                    response.flash = true;
                    response.responseCode = 300;
                    response.message = 'Link Expired';
                }
                else {
                    const password = params.password;
                    const encryptedPassword = await this.commonService.getHash(password);
                    await this.repository.update({ id: params.userId }, { password: encryptedPassword });
                    await this.forgotRepository.update({ userId: params.userId }, { consumed: true });
                    response.flash = true;
                    response.responseCode = 200;
                    response.message = 'Password updated successfully';
                }
            }
        }
        catch (error) {
            console.log(error);
        }
        return response;
    }
    async checkLink(params) {
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
            checkExpiry.setMinutes(checkExpiry.getMinutes() + 5);
            if (data != null) {
                if (checkExpiry < new Date()) {
                    response.responseCode = 300;
                    response.flash = true;
                    response.message = "Link expired";
                }
                else {
                    response.responseCode = 200;
                    response.flash = true;
                    response.message = "Link not expired";
                }
            }
            else {
                response.responseCode = 400;
                response.flash = true;
                response.message = "invalid link";
            }
        }
        catch (error) {
            console.log(error);
        }
        return response;
    }
    async changePassword(params, decodedUser) {
        const response = {
            message: "Invalid request",
            responseCode: 400,
        };
        try {
            const admin = await this.repository.findOne({ id: decodedUser.id });
            const adminPassword = await this.commonService.getHash(params.oldPassword);
            const newPassword = await this.commonService.getHash(params.newPassword);
            const check = await this.commonService.compareHash(params.oldPassword, admin.password);
            if (check) {
                const newPassword = await this.commonService.getHash(params.newPassword);
                await this.repository.update({ id: admin.id }, { password: newPassword });
                response.message = "Password updated";
                response.responseCode = 200;
            }
            else {
                response.message = "Password does not match";
                response.responseCode = 300;
            }
        }
        catch (error) {
            console.log(error);
            response.message = "Error while updating";
        }
        return response;
    }
};
AdminsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(admins_entity_1.Admin)),
    __param(1, typeorm_1.InjectRepository(forgot_entity_1.Forgot)),
    __param(2, typeorm_1.InjectRepository(adminsRole_entity_1.AdminsRole)),
    __param(3, typeorm_1.InjectRepository(categories_entity_1.Categories)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        mailer_1.MailerService,
        common_service_1.CommonService])
], AdminsService);
exports.AdminsService = AdminsService;
//# sourceMappingURL=admins.service.js.map
import { MailerService } from '@nestjs-modules/mailer';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { AdminsRole } from 'src/admins-roles/adminsRole.entity';
import { CommonService } from 'src/common/common.service';
import { Forgot } from 'src/forgot/forgot.entity';
import { Repository } from 'typeorm';
import { Admin } from './admins.entity';
import { Categories } from 'src/categories/categories.entity';
export declare class AdminsService extends TypeOrmCrudService<Admin> {
    private readonly mailerService;
    private readonly commonService;
    private roleRepository;
    private repository;
    private forgotRepository;
    private categoriesRepository;
    constructor(adminsRepository: Repository<Admin>, forgotsRepository: Repository<Forgot>, adminRolesRepository: Repository<AdminsRole>, categoriesRepository: Repository<Categories>, mailerService: MailerService, commonService: CommonService);
    me(id: any): Promise<any>;
    login(admin: any): Promise<any>;
    validateAdmin(emailAddress: string, pass: string): Promise<any>;
    forget(email: any): Promise<any>;
    resetPassword(params: any): Promise<any>;
    checkLink(params: any): Promise<any>;
    changePassword(params: any, decodedUser: any): Promise<any>;
}

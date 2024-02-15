import { MailerService } from '@nestjs-modules/mailer';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { CommonService } from 'src/common/common.service';
import { Repository } from 'typeorm';
import { Forgot } from './forgot.entity';
export declare class ForgotService extends TypeOrmCrudService<Forgot> {
    private readonly commonService;
    private readonly mailerService;
    private repository;
    constructor(forgotRepository: Repository<Forgot>, commonService: CommonService, mailerService: MailerService);
    getCount(query: any): Promise<any>;
}

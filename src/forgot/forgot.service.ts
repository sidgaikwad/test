import { MailerService } from '@nestjs-modules/mailer';
import {
  Injectable
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { CommonService } from 'src/common/common.service';
import { Repository } from 'typeorm';
import { Forgot } from './forgot.entity';
var generator = require('generate-password');

@Injectable()
export class ForgotService extends TypeOrmCrudService<Forgot> {
  private repository: Repository<Forgot> = null;
  constructor(
    @InjectRepository(Forgot) forgotRepository: Repository<Forgot>,
    private readonly commonService: CommonService,
    private readonly mailerService: MailerService,
  ) {
    super(forgotRepository);
    this.repository = forgotRepository;
  }

  async getCount(query: any): Promise<any> {
    return await this.count();
  }
}

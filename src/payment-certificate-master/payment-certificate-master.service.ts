import {  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { CommonService } from 'src/common/common.service';
import { Repository } from 'typeorm';
import { PaymentCertificateMaster } from './payment-certificate-master.entity';
const axios = require('axios');
const otpGenerator = require('otp-generator');

@Injectable()
export class PaymentCertificateMastersService extends TypeOrmCrudService<PaymentCertificateMaster> {
    private repository: Repository<PaymentCertificateMaster> = null;
    constructor(
        @InjectRepository(PaymentCertificateMaster) PaymentCertificateMastersRepository: Repository<PaymentCertificateMaster>,
    ) {
        super(PaymentCertificateMastersRepository);
        this.repository = PaymentCertificateMastersRepository;
    }

    async getCount(query: any): Promise<any> {
        return await this.count();
    }
}

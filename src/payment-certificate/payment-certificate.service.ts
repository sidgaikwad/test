import {  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { CommonService } from 'src/common/common.service';
import { Repository } from 'typeorm';
import { PaymentCertificate } from './payment-certificate.entity';
const axios = require('axios');
const otpGenerator = require('otp-generator');

@Injectable()
export class PaymentCertificatesService extends TypeOrmCrudService<PaymentCertificate> {
    private repository: Repository<PaymentCertificate> = null;
    constructor(
        @InjectRepository(PaymentCertificate) PaymentCertificatesRepository: Repository<PaymentCertificate>,
    ) {
        super(PaymentCertificatesRepository);
        this.repository = PaymentCertificatesRepository;
    }

    async getCount(query: any): Promise<any> {
        return await this.count();
    }
}

import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { PaymentCertificate } from './payment-certificate.entity';
export declare class PaymentCertificatesService extends TypeOrmCrudService<PaymentCertificate> {
    private repository;
    constructor(PaymentCertificatesRepository: Repository<PaymentCertificate>);
    getCount(query: any): Promise<any>;
}

import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { PaymentCertificateMaster } from './payment-certificate-master.entity';
export declare class PaymentCertificateMastersService extends TypeOrmCrudService<PaymentCertificateMaster> {
    private repository;
    constructor(PaymentCertificateMastersRepository: Repository<PaymentCertificateMaster>);
    getCount(query: any): Promise<any>;
}

import { CrudController } from '@nestjsx/crud';
import { PaymentCertificate } from './payment-certificate.entity';
import { PaymentCertificatesService } from './payment-certificate.service';
export declare class PaymentCertificatesController implements CrudController<PaymentCertificate> {
    service: PaymentCertificatesService;
    constructor(service: PaymentCertificatesService);
    getCount(query: any, res: any): Promise<any>;
}

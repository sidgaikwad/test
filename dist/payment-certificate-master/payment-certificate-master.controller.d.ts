import { CrudController } from '@nestjsx/crud';
import { PaymentCertificateMaster } from './payment-certificate-master.entity';
import { PaymentCertificateMastersService } from './payment-certificate-master.service';
export declare class PaymentCertificateMastersController implements CrudController<PaymentCertificateMaster> {
    service: PaymentCertificateMastersService;
    constructor(service: PaymentCertificateMastersService);
    getCount(query: any, res: any): Promise<any>;
}

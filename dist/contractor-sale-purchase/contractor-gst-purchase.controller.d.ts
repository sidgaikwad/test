import { CrudController } from '@nestjsx/crud';
import { ContractorGstPurchase } from './contractor-gst-purchase.entity';
import { ContractorGstPurchasesService } from './contractor-gst-purchase.service';
export declare class ContractorGstPurchasesController implements CrudController<ContractorGstPurchase> {
    service: ContractorGstPurchasesService;
    constructor(service: ContractorGstPurchasesService);
    getCount(query: any, res: any): Promise<any>;
}

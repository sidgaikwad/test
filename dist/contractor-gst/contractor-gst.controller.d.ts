import { CrudController } from '@nestjsx/crud';
import { ContractorGst } from './contractor-gst.entity';
import { ContractorGstsService } from './contractor-gst.service';
export declare class ContractorGstsController implements CrudController<ContractorGst> {
    service: ContractorGstsService;
    constructor(service: ContractorGstsService);
    getCount(query: any, res: any): Promise<any>;
}

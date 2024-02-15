import { CrudController } from '@nestjsx/crud';
import { Contractor } from './contractor.entity';
import { ContractorService } from './contractor.service';
export declare class ContractorController implements CrudController<Contractor> {
    service: ContractorService;
    constructor(service: ContractorService);
    getCount(query: any, res: any): Promise<any>;
}

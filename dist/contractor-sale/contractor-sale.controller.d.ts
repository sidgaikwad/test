import { CrudController } from '@nestjsx/crud';
import { ContractorSale } from './contractor-sale.entity';
import { ContractorSalesService } from './contractor-sale.service';
export declare class ContractorSalesController implements CrudController<ContractorSale> {
    service: ContractorSalesService;
    constructor(service: ContractorSalesService);
    getCount(query: any, res: any): Promise<any>;
}

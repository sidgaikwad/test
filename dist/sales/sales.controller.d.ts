import { CrudController } from '@nestjsx/crud';
import { Sales } from './sales.entity';
import { SalesService } from './sales.service';
export declare class SalesController implements CrudController<Sales> {
    service: SalesService;
    constructor(service: SalesService);
    getCount(query: any, res: any): Promise<any>;
}

import { CrudController } from '@nestjsx/crud';
import { Reciept } from './reciept.entity';
import { RecieptService } from './reciept.service';
export declare class RecieptController implements CrudController<Reciept> {
    service: RecieptService;
    constructor(service: RecieptService);
    getCount(query: any, res: any): Promise<any>;
}

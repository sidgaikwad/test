import { CrudController } from '@nestjsx/crud';
import { Tendor } from './tendor.entity';
import { TendorsService } from './tendor.service';
export declare class TendorsController implements CrudController<Tendor> {
    service: TendorsService;
    constructor(service: TendorsService);
    getCount(query: any, res: any): Promise<any>;
    getEmd(query: any, res: any): Promise<any>;
    analytics(req: any, res: any): Promise<any>;
}

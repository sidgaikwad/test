import { CrudController } from '@nestjsx/crud';
import { Units } from './units.entity';
import { UnitsService } from './units.service';
export declare class UnitsController implements CrudController<Units> {
    service: UnitsService;
    constructor(service: UnitsService);
    getCount(query: any, res: any): Promise<any>;
}

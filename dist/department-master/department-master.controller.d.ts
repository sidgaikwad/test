import { CrudController } from '@nestjsx/crud';
import { DepartmentMaster } from './department-master.entity';
import { DepartmentMastersService } from './department-master.service';
export declare class DepartmentMastersController implements CrudController<DepartmentMaster> {
    service: DepartmentMastersService;
    constructor(service: DepartmentMastersService);
    getCount(query: any, res: any): Promise<any>;
}

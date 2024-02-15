import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { DepartmentMaster } from './department-master.entity';
export declare class DepartmentMastersService extends TypeOrmCrudService<DepartmentMaster> {
    private repository;
    constructor(departmentMastersRepository: Repository<DepartmentMaster>);
    getCount(query: any): Promise<any>;
}

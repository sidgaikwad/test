import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Units } from './units.entity';
import { Repository } from 'typeorm';
import { CommonService } from 'src/common/common.service';
export declare class UnitsService extends TypeOrmCrudService<Units> {
    private readonly commonService;
    private repository;
    constructor(unitsRepository: Repository<Units>, commonService: CommonService);
    getCount(query: any): Promise<any>;
}

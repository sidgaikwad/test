import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Sales } from './sales.entity';
import { Repository } from 'typeorm';
import { CommonService } from 'src/common/common.service';
export declare class SalesService extends TypeOrmCrudService<Sales> {
    private readonly commonService;
    private repository;
    constructor(subCategoryRepository: Repository<Sales>, commonService: CommonService);
    getCount(query: any): Promise<any>;
}

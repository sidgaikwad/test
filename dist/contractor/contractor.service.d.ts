import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Contractor } from './contractor.entity';
import { Repository } from 'typeorm';
import { CommonService } from 'src/common/common.service';
export declare class ContractorService extends TypeOrmCrudService<Contractor> {
    private readonly commonService;
    private repository;
    constructor(subCategoryRepository: Repository<Contractor>, commonService: CommonService);
    getCount(query: any): Promise<any>;
}

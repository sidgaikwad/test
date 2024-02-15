import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Reciept } from './reciept.entity';
import { Repository } from 'typeorm';
import { CommonService } from 'src/common/common.service';
export declare class RecieptService extends TypeOrmCrudService<Reciept> {
    private readonly commonService;
    private repository;
    constructor(subCategoryRepository: Repository<Reciept>, commonService: CommonService);
    getCount(query: any): Promise<any>;
}

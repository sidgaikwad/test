import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { ContractorGst } from './contractor-gst.entity';
export declare class ContractorGstsService extends TypeOrmCrudService<ContractorGst> {
    private repository;
    constructor(ContractorGstsRepository: Repository<ContractorGst>);
    getCount(query: any): Promise<any>;
}

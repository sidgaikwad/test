import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { ContractorSale } from './contractor-sale.entity';
export declare class ContractorSalesService extends TypeOrmCrudService<ContractorSale> {
    private repository;
    constructor(ContractorSalesRepository: Repository<ContractorSale>);
    getCount(query: any): Promise<any>;
}

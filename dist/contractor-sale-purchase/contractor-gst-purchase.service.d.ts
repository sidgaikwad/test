import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { ContractorGstPurchase } from './contractor-gst-purchase.entity';
export declare class ContractorGstPurchasesService extends TypeOrmCrudService<ContractorGstPurchase> {
    private repository;
    constructor(departmentMastersRepository: Repository<ContractorGstPurchase>);
    getCount(query: any): Promise<any>;
}

import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Transaction } from './trasaction.entity';
import { Repository } from 'typeorm';
import { CommonService } from 'src/common/common.service';
export declare class TransactionService extends TypeOrmCrudService<Transaction> {
    private readonly commonService;
    private repository;
    constructor(transactionRepository: Repository<Transaction>, commonService: CommonService);
    getCount(query: any): Promise<any>;
}

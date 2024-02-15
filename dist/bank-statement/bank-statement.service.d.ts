import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { BankStatement } from './bank-statement.entity';
export declare class BankStatementsService extends TypeOrmCrudService<BankStatement> {
    private repository;
    constructor(BankStatementsRepository: Repository<BankStatement>);
    getCount(query: any): Promise<any>;
    getBalance(): Promise<any>;
}

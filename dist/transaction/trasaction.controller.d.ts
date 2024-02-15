import { CrudController } from '@nestjsx/crud';
import { Transaction } from './trasaction.entity';
import { TransactionService } from './trasaction.service';
export declare class TransactionController implements CrudController<Transaction> {
    service: TransactionService;
    constructor(service: TransactionService);
    getCount(query: any, res: any): Promise<any>;
}

import { CrudController } from '@nestjsx/crud';
import { BankStatement } from './bank-statement.entity';
import { BankStatementsService } from './bank-statement.service';
export declare class BankStatementsController implements CrudController<BankStatement> {
    service: BankStatementsService;
    constructor(service: BankStatementsService);
    getCount(query: any, res: any): Promise<any>;
    getBalance(req: any, res: any): Promise<any>;
}

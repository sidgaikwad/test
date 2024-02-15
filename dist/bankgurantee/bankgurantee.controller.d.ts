import { CrudController } from '@nestjsx/crud';
import { BankGurantee } from './bankgurantee.entity';
import { BankGuranteesService } from './bankgurantee.service';
export declare class BankGuranteesController implements CrudController<BankGurantee> {
    service: BankGuranteesService;
    constructor(service: BankGuranteesService);
    getCount(query: any, res: any): Promise<any>;
    updateValue(query: any, res: any): Promise<any>;
    analytics(req: any, res: any): Promise<any>;
}

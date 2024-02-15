import { CrudController } from '@nestjsx/crud';
import { DocumentMaster } from './document-type-master.entity';
import { DocumentMastersService } from './document-type-master.service';
export declare class DocumentMastersController implements CrudController<DocumentMaster> {
    service: DocumentMastersService;
    constructor(service: DocumentMastersService);
    getCount(query: any, res: any): Promise<any>;
}

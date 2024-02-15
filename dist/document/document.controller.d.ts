import { CrudController } from '@nestjsx/crud';
import { Documents } from './document.entity';
import { DocumentsService } from './document.service';
export declare class DocumentsController implements CrudController<Documents> {
    service: DocumentsService;
    constructor(service: DocumentsService);
    getCount(query: any, res: any): Promise<any>;
}

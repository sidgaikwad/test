import { CrudController } from '@nestjsx/crud';
import { GST } from './gst.entity';
import { GSTsService } from './gst.service';
export declare class GSTsController implements CrudController<GST> {
    service: GSTsService;
    constructor(service: GSTsService);
    getCount(query: any, res: any): Promise<any>;
}

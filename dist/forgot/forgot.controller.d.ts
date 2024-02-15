import { CrudController } from '@nestjsx/crud';
import { Forgot } from './forgot.entity';
import { ForgotService } from './forgot.service';
export declare class ForgotController implements CrudController<Forgot> {
    service: ForgotService;
    constructor(service: ForgotService);
    getCount(query: any, res: any): Promise<any>;
}

import { Banner } from './banners.entity';
import { CrudController } from '@nestjsx/crud';
import { BannersService } from './banners.service';
export declare class BannersController implements CrudController<Banner> {
    service: BannersService;
    constructor(service: BannersService);
    updateOrder(req: any, res: any): Promise<any>;
    getCount(query: any, res: any): Promise<any>;
}

import { CrudController } from '@nestjsx/crud';
import { Categories } from './categories.entity';
import { CategoriesService } from './categories.service';
export declare class CategoriesController implements CrudController<Categories> {
    service: CategoriesService;
    constructor(service: CategoriesService);
    updateOrder(req: any, res: any): Promise<any>;
    getCount(query: any, res: any): Promise<any>;
}

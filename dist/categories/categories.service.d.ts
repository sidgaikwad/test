import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Categories } from './categories.entity';
import { Repository } from 'typeorm';
import { CommonService } from 'src/common/common.service';
export declare class CategoriesService extends TypeOrmCrudService<Categories> {
    private readonly commonService;
    private repository;
    constructor(categoriesRepository: Repository<Categories>, commonService: CommonService);
    updatePriority(req: any): Promise<boolean>;
    getCount(query: any): Promise<any>;
}

import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Banner } from './banners.entity';
import { Repository } from 'typeorm';
import { CommonService } from 'src/common/common.service';
export declare class BannersService extends TypeOrmCrudService<Banner> {
    private readonly commonService;
    private repository;
    constructor(bannersRepository: Repository<Banner>, commonService: CommonService);
    getCount(query: any): Promise<any>;
    updatePriority(req: any): Promise<boolean>;
}

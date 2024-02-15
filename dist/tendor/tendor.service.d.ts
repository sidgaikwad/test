import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Tendor } from './tendor.entity';
import { Repository } from 'typeorm';
import { CommonService } from 'src/common/common.service';
export declare class TendorsService extends TypeOrmCrudService<Tendor> {
    private readonly commonService;
    private repository;
    constructor(tendorsRepository: Repository<Tendor>, commonService: CommonService);
    getCount(query: any): Promise<any>;
    26316: any;
    getEmd(query: any): Promise<any>;
    analytics(body: any): Promise<any>;
}

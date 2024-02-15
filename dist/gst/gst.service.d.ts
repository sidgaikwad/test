import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { GST } from './gst.entity';
import { Repository } from 'typeorm';
import { CommonService } from 'src/common/common.service';
export declare class GSTsService extends TypeOrmCrudService<GST> {
    private readonly commonService;
    private repository;
    constructor(gstsRepository: Repository<GST>, commonService: CommonService);
    getCount(query: any): Promise<any>;
}

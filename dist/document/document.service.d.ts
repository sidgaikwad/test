import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Documents } from './document.entity';
import { Repository } from 'typeorm';
import { CommonService } from 'src/common/common.service';
export declare class DocumentsService extends TypeOrmCrudService<Documents> {
    private readonly commonService;
    private repository;
    constructor(documentsRepository: Repository<Documents>, commonService: CommonService);
    getCount(query: any): Promise<any>;
}

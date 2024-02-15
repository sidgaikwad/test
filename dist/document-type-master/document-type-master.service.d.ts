import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { DocumentMaster } from './document-type-master.entity';
export declare class DocumentMastersService extends TypeOrmCrudService<DocumentMaster> {
    private repository;
    constructor(departmentMastersRepository: Repository<DocumentMaster>);
    getCount(query: any): Promise<any>;
}

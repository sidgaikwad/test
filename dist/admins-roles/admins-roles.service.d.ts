import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { AdminsRole } from './adminsRole.entity';
import { Repository } from 'typeorm';
export declare class AdminsRolesService extends TypeOrmCrudService<AdminsRole> {
    constructor(adminsRolesRepository: Repository<AdminsRole>);
}

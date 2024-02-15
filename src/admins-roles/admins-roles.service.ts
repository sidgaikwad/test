import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { AdminsRole } from './adminsRole.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AdminsRolesService extends TypeOrmCrudService<AdminsRole> {
    constructor(
        @InjectRepository(AdminsRole) adminsRolesRepository: Repository<AdminsRole>,
    ) {
        super(adminsRolesRepository);
    }
}

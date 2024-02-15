import {  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { CommonService } from 'src/common/common.service';
import { Repository } from 'typeorm';
import { DepartmentMaster } from './department-master.entity';
const axios = require('axios');
const otpGenerator = require('otp-generator');

@Injectable()
export class DepartmentMastersService extends TypeOrmCrudService<DepartmentMaster> {
    private repository: Repository<DepartmentMaster> = null;
    constructor(
        @InjectRepository(DepartmentMaster) departmentMastersRepository: Repository<DepartmentMaster>,
    ) {
        super(departmentMastersRepository);
        this.repository = departmentMastersRepository;
    }

    async getCount(query: any): Promise<any> {
        return await this.count();
    }
}

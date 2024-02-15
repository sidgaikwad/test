import {  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { CommonService } from 'src/common/common.service';
import { Repository } from 'typeorm';
import { DocumentMaster } from './document-type-master.entity';
const axios = require('axios');
const otpGenerator = require('otp-generator');

@Injectable()
export class DocumentMastersService extends TypeOrmCrudService<DocumentMaster> {
    private repository: Repository<DocumentMaster> = null;
    constructor(
        @InjectRepository(DocumentMaster) departmentMastersRepository: Repository<DocumentMaster>,
    ) {
        super(departmentMastersRepository);
        this.repository = departmentMastersRepository;
    }

    async getCount(query: any): Promise<any> {
        return await this.count();
    }
}

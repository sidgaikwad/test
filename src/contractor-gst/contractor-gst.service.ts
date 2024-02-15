import {  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { CommonService } from 'src/common/common.service';
import { Repository } from 'typeorm';
import { ContractorGst } from './contractor-gst.entity';
const axios = require('axios');
const otpGenerator = require('otp-generator');

@Injectable()
export class ContractorGstsService extends TypeOrmCrudService<ContractorGst> {
    private repository: Repository<ContractorGst> = null;
    constructor(
        @InjectRepository(ContractorGst) ContractorGstsRepository: Repository<ContractorGst>,
    ) {
        super(ContractorGstsRepository);
        this.repository = ContractorGstsRepository;
    }

    async getCount(query: any): Promise<any> {
        return await this.count();
    }
}

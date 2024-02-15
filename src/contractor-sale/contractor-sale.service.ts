import {  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { CommonService } from 'src/common/common.service';
import { Repository } from 'typeorm';
import { ContractorSale } from './contractor-sale.entity';
const axios = require('axios');
const otpGenerator = require('otp-generator');

@Injectable()
export class ContractorSalesService extends TypeOrmCrudService<ContractorSale> {
    private repository: Repository<ContractorSale> = null;
    constructor(
        @InjectRepository(ContractorSale) ContractorSalesRepository: Repository<ContractorSale>,
    ) {
        super(ContractorSalesRepository);
        this.repository = ContractorSalesRepository;
    }

    async getCount(query: any): Promise<any> {
        return await this.count();
    }
}

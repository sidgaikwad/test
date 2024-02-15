import {  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { CommonService } from 'src/common/common.service';
import { Repository } from 'typeorm';
import { ContractorGstPurchase } from './contractor-gst-purchase.entity';
const axios = require('axios');
const otpGenerator = require('otp-generator');

@Injectable()
export class ContractorGstPurchasesService extends TypeOrmCrudService<ContractorGstPurchase> {
    private repository: Repository<ContractorGstPurchase> = null;
    constructor(
        @InjectRepository(ContractorGstPurchase) departmentMastersRepository: Repository<ContractorGstPurchase>,
    ) {
        super(departmentMastersRepository);
        this.repository = departmentMastersRepository;
    }

    async getCount(query: any): Promise<any> {
        return await this.count();
    }
}

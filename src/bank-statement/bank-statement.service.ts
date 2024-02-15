import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { CommonService } from 'src/common/common.service';
import { Repository } from 'typeorm';
import { BankStatement } from './bank-statement.entity';
const axios = require('axios');
const otpGenerator = require('otp-generator');

@Injectable()
export class BankStatementsService extends TypeOrmCrudService<BankStatement> {
    private repository: Repository<BankStatement> = null;
    constructor(
        @InjectRepository(BankStatement) BankStatementsRepository: Repository<BankStatement>,
    ) {
        super(BankStatementsRepository);
        this.repository = BankStatementsRepository;
    }

    async getCount(query: any): Promise<any> {
        return await this.count();
    }

    async getBalance(): Promise<any> {
        const response = { message: 'Invalid request', responseCode: 400, balanace: null }
        try {
            const balance = await this.repository.query('select sum(amount) from "bank-statement" as balance ');
            response.balanace = Number(balance[0].sum);
            response.responseCode = 200;
            response.message = 'balance';

        } catch (err) {
            console.log(err)
            response.responseCode = 400;
            response.message = 'failed to check'
        }
        return response
    }
}

import { Injectable, ForbiddenException, Req, UploadedFile } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Transaction } from './trasaction.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommonService } from 'src/common/common.service';

@Injectable()
export class TransactionService extends TypeOrmCrudService<Transaction> {
    private repository: Repository<Transaction> = null;
    constructor(
        @InjectRepository(Transaction) transactionRepository: Repository<Transaction>,
        private readonly commonService: CommonService,
    ) {
        super(transactionRepository);
        this.repository = transactionRepository;
    }

    async getCount(query: any): Promise<any> {
        return await this.count();
    }
}

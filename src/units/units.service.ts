import { Injectable, ForbiddenException, Req, UploadedFile } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Units } from './units.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommonService } from 'src/common/common.service';

@Injectable()
export class UnitsService extends TypeOrmCrudService<Units> {
    private repository: Repository<Units> = null;
    constructor(
        @InjectRepository(Units) unitsRepository: Repository<Units>,
        private readonly commonService: CommonService,
    ) {
        super(unitsRepository);
        this.repository = unitsRepository;
    }

    async getCount(query: any): Promise<any> {
        return await this.count();
    }
}

import { Injectable, ForbiddenException, Req, UploadedFile } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { GST } from './gst.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommonService } from 'src/common/common.service';

@Injectable()
export class GSTsService extends TypeOrmCrudService<GST> {
    private repository: Repository<GST> = null;
    constructor(
        @InjectRepository(GST) gstsRepository: Repository<GST>,
        private readonly commonService: CommonService,
    ) {
        super(gstsRepository);
        this.repository = gstsRepository;
    }

    async getCount(query: any): Promise<any> {
        return await this.count();
    }
}

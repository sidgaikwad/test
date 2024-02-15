import { Injectable, ForbiddenException, Req, UploadedFile } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Documents } from './document.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommonService } from 'src/common/common.service';

@Injectable()
export class DocumentsService extends TypeOrmCrudService<Documents> {
    private repository: Repository<Documents> = null;
    constructor(
        @InjectRepository(Documents) documentsRepository: Repository<Documents>,
        private readonly commonService: CommonService,
    ) {
        super(documentsRepository);
        this.repository = documentsRepository;
    }

    async getCount(query: any): Promise<any> {
        return await this.count();
    }
}

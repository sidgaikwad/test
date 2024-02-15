import { Injectable, ForbiddenException, Req, UploadedFile } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Settings } from './settings.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommonService } from 'src/common/common.service';

@Injectable()
export class SettingsService extends TypeOrmCrudService<Settings> {
    private repository: Repository<Settings> = null;
    constructor(
        @InjectRepository(Settings) settingsRepository: Repository<Settings>,
        private readonly commonService: CommonService,
    ) {
        super(settingsRepository);
        this.repository = settingsRepository;
    }

    async getCount(query: any): Promise<any> {
        return await this.count();
    }
}

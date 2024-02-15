import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Settings } from './settings.entity';
import { Repository } from 'typeorm';
import { CommonService } from 'src/common/common.service';
export declare class SettingsService extends TypeOrmCrudService<Settings> {
    private readonly commonService;
    private repository;
    constructor(settingsRepository: Repository<Settings>, commonService: CommonService);
    getCount(query: any): Promise<any>;
}

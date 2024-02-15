import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { BankGurantee } from './bankgurantee.entity';
import { Repository } from 'typeorm';
import { CommonService } from 'src/common/common.service';
import { Settings } from 'src/settings/settings.entity';
import { Tendor } from 'src/tendor/tendor.entity';
export declare class BankGuranteesService extends TypeOrmCrudService<BankGurantee> {
    private readonly commonService;
    private repository;
    private settingRepository;
    private tendorRepository;
    constructor(bankGuranteesRepository: Repository<BankGurantee>, settingRepository: Repository<Settings>, tendorRepository: Repository<Tendor>, commonService: CommonService);
    getCount(query: any): Promise<any>;
    updateValue(): Promise<any>;
    analytics(body: any): Promise<any>;
}

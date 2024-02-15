import { CommonService } from 'src/common/common.service';
import { Settings } from 'src/settings/settings.entity';
import { Connection, EntitySubscriberInterface, Repository } from 'typeorm';
import { BankGurantee } from './bankgurantee.entity';
import { BankGuranteesService } from './bankgurantee.service';
export declare class BankGuranteeSubscriber implements EntitySubscriberInterface<BankGurantee> {
    private readonly adminsService;
    private readonly commonService;
    private repository;
    private settingRepository;
    constructor(settingRepository: Repository<Settings>, connection: Connection, adminsService: BankGuranteesService, commonService: CommonService);
    listenTo(): typeof BankGurantee;
}

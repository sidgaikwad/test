import { InjectRepository } from '@nestjs/typeorm';
import { CommonService } from 'src/common/common.service';
import { Settings } from 'src/settings/settings.entity';
import {
    Connection,
    EntitySubscriberInterface,
    EventSubscriber,
    InsertEvent,
    Repository,
    UpdateEvent
} from 'typeorm';
import { BankGurantee } from './bankgurantee.entity';
import { BankGuranteesService } from './bankgurantee.service';
@EventSubscriber()
export class BankGuranteeSubscriber implements EntitySubscriberInterface<BankGurantee> {
    private repository: Repository<BankGurantee> = null;
    private settingRepository: Repository<Settings> = null;
    constructor(
        @InjectRepository(Settings) settingRepository: Repository<Settings>,
        // @InjectRepository(BankGurantee) bankGuranteesRepository: Repository<BankGurantee>,
        connection: Connection,
        private readonly adminsService: BankGuranteesService,
        private readonly commonService: CommonService,
    ) {
        connection.subscribers.push(this);
        this.settingRepository = settingRepository;
    }

    listenTo() {
        return BankGurantee;
    }

    // async afterInsert(event: InsertEvent<BankGurantee>) {
    //     const balance = await this.settingRepository.query(`select sum(amount) from "bankGurantee" as balance`);
    //     const sum = balance[0].sum == null ? 0 : Number(balance[0].sum);
    //     const fdr = await this.settingRepository.query(`select sum("fdrDeposit") from "bankGurantee" as fdr`);
    //     const fdrNum = fdr[0].sum == null ? 0 : Number(fdr[0].sum + event.entity.fdrDeposit);
    //     await this.settingRepository.update({}, { totalBgTaken: sum, actualFdrGiven: fdrNum })
    // }

    // async afterUpdate(event: UpdateEvent<BankGurantee>) {
    //     const balance = await this.settingRepository.query(`select sum(amount) from "bankGurantee" as balance`);
    //     const sum = balance[0].sum == null ? 0 : Number(balance[0].sum);
    //     const fdr = await this.settingRepository.query(`select sum("fdrDeposit") from "bankGurantee" as fdr`);
    //     const fdrNum = fdr[0].sum == null ? 0 : Number(fdr[0].sum + event.entity.fdrDeposit);
    //     await this.settingRepository.update({}, { totalBgTaken: sum, actualFdrGiven: fdrNum })
    // }
}
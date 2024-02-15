import { CommonService } from 'src/common/common.service';
import {
    Connection,
    EntitySubscriberInterface,
    EventSubscriber,
    InsertEvent,
    Repository
} from 'typeorm';
import { Admin } from './admins.entity';
import { AdminsService } from './admins.service';

@EventSubscriber()
export class AdminsSubscriber implements EntitySubscriberInterface<Admin> {
    private repository: Repository<Admin> = null;
    constructor(
        connection: Connection,
        private readonly adminsService: AdminsService,
        private readonly commonService: CommonService,
    ) {
        connection.subscribers.push(this);
    }

    listenTo() {
        return Admin;
    }

    async beforeInsert(event: InsertEvent<Admin>) {
        event.entity.password = await this.commonService.getHash(event.entity.password);
    }
}
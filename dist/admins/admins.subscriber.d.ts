import { CommonService } from 'src/common/common.service';
import { Connection, EntitySubscriberInterface, InsertEvent } from 'typeorm';
import { Admin } from './admins.entity';
import { AdminsService } from './admins.service';
export declare class AdminsSubscriber implements EntitySubscriberInterface<Admin> {
    private readonly adminsService;
    private readonly commonService;
    private repository;
    constructor(connection: Connection, adminsService: AdminsService, commonService: CommonService);
    listenTo(): typeof Admin;
    beforeInsert(event: InsertEvent<Admin>): Promise<void>;
}

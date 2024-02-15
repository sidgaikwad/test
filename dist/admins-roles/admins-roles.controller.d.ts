import { AdminsRole } from './adminsRole.entity';
import { CrudController } from '@nestjsx/crud';
import { AdminsRolesService } from './admins-roles.service';
export declare class AdminsRolesController implements CrudController<AdminsRole> {
    service: AdminsRolesService;
    constructor(service: AdminsRolesService);
}

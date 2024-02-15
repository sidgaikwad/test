import { Controller } from '@nestjs/common';
import { AdminsRole } from './adminsRole.entity';
import { Crud, CrudController } from '@nestjsx/crud';
import { AdminsRolesService } from './admins-roles.service';
import { ApiTags } from '@nestjs/swagger';
@Crud({
    model: {
        type: AdminsRole,
    },
})
@ApiTags('admins-roles')
@Controller('admins-roles')
export class AdminsRolesController implements CrudController<AdminsRole> {
    constructor(public service: AdminsRolesService) { }
}

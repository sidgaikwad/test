import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { DepartmentMaster } from './department-master.entity';
import { DepartmentMastersService } from './department-master.service';
@Crud({
    model: {
        type: DepartmentMaster,
    },

})

@ApiTags('department-master')
@Controller('department-master')
export class DepartmentMastersController implements CrudController<DepartmentMaster> {
    constructor(
        public service: DepartmentMastersService,
    ) { }

    @Get('count')
    async getCount(@Query() query, @Res() res) {
        const count = await this.service.getCount(query);
        return res.status(HttpStatus.OK).json(count);
    }

}

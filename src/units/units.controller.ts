import { Controller, Get, HttpStatus, Post, Query, Req, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Public } from 'src/decorator/public.decorator';
import { Units } from './units.entity';
import { UnitsService } from './units.service';
@Crud({
    model: {
        type: Units,
    },
})
@ApiTags('units')
@Controller('units')
export class UnitsController implements CrudController<Units> {
    constructor(public service: UnitsService) { }

    @Get('count')
    async getCount(@Query() query, @Res() res) {
        const count = await this.service.getCount(query);
        return res.status(HttpStatus.OK).json(count);
    }
}
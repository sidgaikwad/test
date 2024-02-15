import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { GST } from './gst.entity';
import { GSTsService } from './gst.service';
@Crud({
    model: {
        type: GST,
    },
})
@ApiTags('gst')
@Controller('gst')
export class GSTsController implements CrudController<GST> {
    constructor(public service: GSTsService) { }

    @Get('count')
    async getCount(@Query() query, @Res() res) {
        const count = await this.service.getCount(query);
        return res.status(HttpStatus.OK).json(count);
    }
}
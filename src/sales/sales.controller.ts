import { Controller, Get, HttpStatus, Post, Query, Req, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Sales } from './sales.entity';
import { SalesService } from './sales.service';
@Crud({
    model: {
        type: Sales,
    },
    query: {
        join: {
            tendor: {
                eager: true,
            },
        },
    },
})
@ApiTags('sales')
@Controller('sales')
export class SalesController implements CrudController<Sales> {
    constructor(public service: SalesService) { }

    @Get('count')
    async getCount(@Query() query, @Res() res) {
        const count = await this.service.getCount(query);
        return res.status(HttpStatus.OK).json(count);
    }
}
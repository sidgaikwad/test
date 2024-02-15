import { Controller, Get, HttpStatus, Post, Query, Req, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Reciept } from './reciept.entity';
import { RecieptService } from './reciept.service';
@Crud({
    model: {
        type: Reciept,
    },
    query: {
        join: {
            tendor: {
                eager: true,
            },
            sales: {
                eager: true,
            },
        },
    },
})
@ApiTags('reciept')
@Controller('reciept')
export class RecieptController implements CrudController<Reciept> {
    constructor(public service: RecieptService) { }

    @Get('count')
    async getCount(@Query() query, @Res() res) {
        const count = await this.service.getCount(query);
        return res.status(HttpStatus.OK).json(count);
    }
}
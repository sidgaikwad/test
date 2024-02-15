import { Controller, Get, HttpStatus, Post, Query, Req, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Public } from 'src/decorator/public.decorator';
import { Tendor } from './tendor.entity';
import { TendorsService } from './tendor.service';
@Crud({
    model: {
        type: Tendor,
    },
    query: {
        join: {
            contractor: {
                eager: true,   
            },
            bankg: {
                eager: true,   
            },
            department: {
                eager: true,   
            },
        },
    },
})
@ApiTags('tendor')
@Controller('tendor')
export class TendorsController implements CrudController<Tendor> {
    constructor(public service: TendorsService) { }

    @Get('count')
    async getCount(@Query() query, @Res() res) {
        const count = await this.service.getCount(query);
        return res.status(HttpStatus.OK).json(count);
    }
    @Get('earnestmoney')
    async getEmd(@Query() query, @Res() res) {
        const em = await this.service.getEmd(query);
        return res.status(HttpStatus.OK).json(em);
    }

    @Post('analytics')
    async analytics(@Req() req, @Res() res) {
        try {
            const data = await this.service.analytics(req.body);
            return res.status(HttpStatus.OK).json(data);
        } catch (error) {
            // tslint:disable-next-line:no-console
            console.log(error);
        }
    }
}
import { Controller, Get, HttpStatus, Post, Query, Req, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Public } from 'src/decorator/public.decorator';
import { BankGurantee } from './bankgurantee.entity';
import { BankGuranteesService } from './bankgurantee.service';
@Crud({
    model: {
        type: BankGurantee,
    },
    query:{
        join:{
            tendor: {
                eager: true,   
            },
        }


    }

})
@ApiTags('bank-gurantee')
@Controller('bank-gurantee')
export class BankGuranteesController implements CrudController<BankGurantee> {
    constructor(public service: BankGuranteesService) { }

    // @Public()
    // @Get()
    // async get(@Res() res: any) {
    //     const data = await this.service.findOne({});
    //     return res.status(HttpStatus.OK).json(data);
    // }

    @Get('count')
    async getCount(@Query() query, @Res() res) {
        const count = await this.service.getCount(query);
        return res.status(HttpStatus.OK).json(count);
    }

    @Get('update-value')
    async updateValue(@Query() query, @Res() res) {
        const count = await this.service.updateValue();
        return res.status(HttpStatus.OK).json(count);
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
import { Controller, Get, HttpStatus, Post, Query, Req, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Public } from 'src/decorator/public.decorator';
import { Transaction } from './trasaction.entity';
import { TransactionService } from './trasaction.service';
@Crud({
    model: {
        type: Transaction,
    },
    query: {
        join: {
            tendor: {
                eager: true
            },
            contractor: {
                eager: true
            },
            isVerifiedBy:{
                eager:true
            }
        }
}})
@ApiTags('transaction')
@Controller('transaction')
export class TransactionController implements CrudController<Transaction> {
    constructor(public service: TransactionService) { }

    @Get('count')
    async getCount(@Query() query, @Res() res) {
        const count = await this.service.getCount(query);
        return res.status(HttpStatus.OK).json(count);
    }
}
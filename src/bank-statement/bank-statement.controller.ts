import { Controller, Get, HttpStatus, Query, Req, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { BankStatement } from './bank-statement.entity';
import { BankStatementsService } from './bank-statement.service';
@Crud({
    model: {
        type: BankStatement,
    },

})

@ApiTags('bank-statement')
@Controller('bank-statement')
export class BankStatementsController implements CrudController<BankStatement> {
    constructor(
        public service: BankStatementsService,
    ) { }

    @Get('count')
    async getCount(@Query() query, @Res() res) {
        const count = await this.service.getCount(query);
        return res.status(HttpStatus.OK).json(count);
    }

    @Get('get-balance')
    async getBalance(@Req() req, @Res() res) {
        const data = await this.service.getBalance();
        return res.status(HttpStatus.OK).json(data);
    }

}

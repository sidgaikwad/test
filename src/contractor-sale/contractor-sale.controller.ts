import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { ContractorSale } from './contractor-sale.entity';
import { ContractorSalesService } from './contractor-sale.service';
@Crud({
    model: {
        type: ContractorSale,
    },
    query:{
        join:{
            contractorGst:{
                eager:true
            },
            tendor:{
                eager:true
            }
        }
    }

})

@ApiTags('contractor-gst-sale')
@Controller('contractor-gst-sale')
export class ContractorSalesController implements CrudController<ContractorSale> {
    constructor(
        public service: ContractorSalesService,
    ) { }

    @Get('count')
    async getCount(@Query() query, @Res() res) {
        const count = await this.service.getCount(query);
        return res.status(HttpStatus.OK).json(count);
    }

}

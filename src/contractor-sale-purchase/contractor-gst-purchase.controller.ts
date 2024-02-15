import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { ContractorGstPurchase } from './contractor-gst-purchase.entity';
import { ContractorGstPurchasesService } from './contractor-gst-purchase.service';
@Crud({
    model: {
        type: ContractorGstPurchase,
    },
    query: {
        join: {
            contractorGst: {
                eager: true
            },
            tendor: {
                eager: true
            },
            transaction: {
                eager: true
            }
        }
    }

})

@ApiTags('contractor-gst-purchase')
@Controller('contractor-gst-purchase')
export class ContractorGstPurchasesController implements CrudController<ContractorGstPurchase> {
    constructor(
        public service: ContractorGstPurchasesService,
    ) { }

    @Get('count')
    async getCount(@Query() query, @Res() res) {
        const count = await this.service.getCount(query);
        return res.status(HttpStatus.OK).json(count);
    }

}

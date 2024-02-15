import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { ContractorGst } from './contractor-gst.entity';
import { ContractorGstsService } from './contractor-gst.service';
@Crud({
    model: {
        type: ContractorGst,
    },

})

@ApiTags('contractor-gst')
@Controller('contractor-gst')
export class ContractorGstsController implements CrudController<ContractorGst> {
    constructor(
        public service: ContractorGstsService,
    ) { }

    @Get('count')
    async getCount(@Query() query, @Res() res) {
        const count = await this.service.getCount(query);
        return res.status(HttpStatus.OK).json(count);
    }

}

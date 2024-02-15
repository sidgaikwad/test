import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { PaymentCertificateMaster } from './payment-certificate-master.entity';
import { PaymentCertificateMastersService } from './payment-certificate-master.service';
@Crud({
    model: {
        type: PaymentCertificateMaster,
    },

})

@ApiTags('payment-certificate-master')
@Controller('payment-certificate-master')
export class PaymentCertificateMastersController implements CrudController<PaymentCertificateMaster> {
    constructor(
        public service: PaymentCertificateMastersService,
    ) { }

    @Get('count')
    async getCount(@Query() query, @Res() res) {
        const count = await this.service.getCount(query);
        return res.status(HttpStatus.OK).json(count);
    }

}

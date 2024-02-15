import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { PaymentCertificate } from './payment-certificate.entity';
import { PaymentCertificatesService } from './payment-certificate.service';
@Crud({
    model: {
        type: PaymentCertificate,
    },
    query: {
        join: {
            paymentCertificateMaster: {
                eager: true
            }
        }
    }

})

@ApiTags('payment-certificate')
@Controller('payment-certificate')
export class PaymentCertificatesController implements CrudController<PaymentCertificate> {
    constructor(
        public service: PaymentCertificatesService,
    ) { }

    @Get('count')
    async getCount(@Query() query, @Res() res) {
        const count = await this.service.getCount(query);
        return res.status(HttpStatus.OK).json(count);
    }

}

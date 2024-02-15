import { Controller, Get, HttpStatus, Query, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { DocumentMaster } from './document-type-master.entity';
import { DocumentMastersService } from './document-type-master.service';
@Crud({
    model: {
        type: DocumentMaster,
    },

})

@ApiTags('document-type-master')
@Controller('document-type-master')
export class DocumentMastersController implements CrudController<DocumentMaster> {
    constructor(
        public service: DocumentMastersService,
    ) { }

    @Get('count')
    async getCount(@Query() query, @Res() res) {
        const count = await this.service.getCount(query);
        return res.status(HttpStatus.OK).json(count);
    }

}

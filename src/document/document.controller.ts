import { Controller, Get, HttpStatus, Post, Query, Req, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Public } from 'src/decorator/public.decorator';
import { Documents } from './document.entity';
import { DocumentsService } from './document.service';
@Crud({
    model: {
        type: Documents,
    },
    query: {
        join: {
            tendor: {
                eager: true
            },
            documentMaster: {
                eager: true
            }
        }
}})
@ApiTags('documents')
@Controller('documents')
export class DocumentsController implements CrudController<Documents> {
    constructor(public service: DocumentsService) { }

    @Get('count')
    async getCount(@Query() query, @Res() res) {
        const count = await this.service.getCount(query);
        return res.status(HttpStatus.OK).json(count);
    }
}
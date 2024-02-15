import { Controller, Res, Get, Post, HttpStatus, Req, UseInterceptors, Body, UploadedFile, Query } from '@nestjs/common';
import { Banner } from './banners.entity';
import { Crud, CrudController } from '@nestjsx/crud';
import { BannersService } from './banners.service';
import { Public } from 'src/decorator/public.decorator';
import { BannersDTO } from './dtos/create-banners.dto';
@Crud({
    model: {
        type: Banner,
    },
    // dto: {
    //     create: BannersDTO
    // },
})
@Controller('banners')
export class BannersController implements CrudController<Banner> {
    constructor(public service: BannersService) { }

    @Post('order')
    async updateOrder(@Req() req, @Res() res) {
        const updated = await this.service.updatePriority(req);
        if (updated) {
            return res.status(HttpStatus.OK).json(updated);
        } else {
            return res.status(HttpStatus.BAD_REQUEST).json('Error While Updating');
        }
    }

    @Get('count')
    async getCount(@Query() query, @Res() res) {
        const count = await this.service.getCount(query);
        return res.status(HttpStatus.OK).json(count);
    }

}

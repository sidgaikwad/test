import { Controller, Get, HttpStatus, Post, Query, Req, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Categories } from './categories.entity';
import { CategoriesService } from './categories.service';
import { CategoriesDTO } from './dtos/create-categories.dto';
@Crud({
    model: {
        type: Categories,
    },
    // dto: {
    //     create: CategoriesDTO
    // }
})
@ApiTags('categories')
@Controller('categories')
export class CategoriesController implements CrudController<Categories> {
    constructor(public service: CategoriesService) { }

    @Post('order')
    async updateOrder(@Req() req,@Res() res){
        const updated = await this.service.updatePriority(req);
        if(updated){
            return res.status(HttpStatus.OK).json(updated);
        } else{
            return res.status(HttpStatus.BAD_REQUEST).json('Error While Updating');
        }
        
    }

    @Get('count')
    async getCount(@Query() query, @Res() res) {
        const count = await this.service.getCount(query);
        return res.status(HttpStatus.OK).json(count);
    }
}
import { Controller, Get, HttpStatus, Post, Query, Req, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Contractor } from './contractor.entity';
import { ContractorService } from './contractor.service';
@Crud({
    model: {
        type: Contractor,
    },
    query: {
        join: {
            tendor: {
                eager: true,
            },
        },
    },
})
@ApiTags('contractor')
@Controller('contractor')
export class ContractorController implements CrudController<Contractor> {
    constructor(public service: ContractorService) { }

    // @Post('order')
    // async updateOrder(@Req() req,@Res() res){
    //     const updated = await this.service.updatePriority(req);
    //     if(updated){
    //         return res.status(HttpStatus.OK).json(updated);
    //     } else{
    //         return res.status(HttpStatus.BAD_REQUEST).json('Error While Updating');
    //     }
        
    // }

    @Get('count')
    async getCount(@Query() query, @Res() res) {
        const count = await this.service.getCount(query);
        return res.status(HttpStatus.OK).json(count);
    }
}
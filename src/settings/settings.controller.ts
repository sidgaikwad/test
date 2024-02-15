import { Controller, Get, HttpStatus, Post, Query, Req, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Public } from 'src/decorator/public.decorator';
import { Settings } from './settings.entity';
import { SettingsService } from './settings.service';
@Crud({
    model: {
        type: Settings,
    },
    routes: {
        getManyBase:{
            decorators:[
                Public()
            ]
        }
    }
})
@ApiTags('settings')
@Controller('settings')
export class SettingsController implements CrudController<Settings> {
    constructor(public service: SettingsService) { }

    @Get('count')
    async getCount(@Query() query, @Res() res) {
        const count = await this.service.getCount(query);
        return res.status(HttpStatus.OK).json(count);
    }
}
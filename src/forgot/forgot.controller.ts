import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Public } from 'src/decorator/public.decorator';
import { Forgot } from './forgot.entity';
import { ForgotService } from './forgot.service';
@Crud({
  model: {
    type: Forgot,
  },
})
@Controller('forgot')
export class ForgotController implements CrudController<Forgot> {
  constructor(public service: ForgotService) {}

  @Get('count')
  async getCount(@Query() query, @Res() res) {
    const count = await this.service.getCount(query);
    return res.status(HttpStatus.OK).json(count);
  } 
}

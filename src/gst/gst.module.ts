import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { CommonService } from 'src/common/common.service';
import { JWT_MODULE_OPTIONS } from 'src/constants';
import { GSTsController } from './gst.controller';
import { GST } from './gst.entity';
import { GSTsService } from './gst.service';

@Module({
  controllers: [GSTsController],
  providers: [
    GSTsService,
    CommonService
  ],
  imports: [
    TypeOrmModule.forFeature([GST]),
    JwtModule.register(JWT_MODULE_OPTIONS),
    CommonModule,
  ],
  exports: [
    TypeOrmModule,
    GSTsService
  ],
})

export class GSTsModule { }

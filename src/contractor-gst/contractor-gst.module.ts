import { HttpModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { CommonService } from 'src/common/common.service';
import { JWT_MODULE_OPTIONS } from 'src/constants';
import { ContractorGstsController } from './contractor-gst.controller';
import { ContractorGst } from './contractor-gst.entity';
import { ContractorGstsService } from './contractor-gst.service';

@Module({
  controllers: [ContractorGstsController],
  providers: [
    ContractorGstsService,
    CommonService,
  ],
  imports: [
    TypeOrmModule.forFeature([ContractorGst]),
    JwtModule.register(JWT_MODULE_OPTIONS),
    CommonModule,
    HttpModule,
  ],
  exports: [
    TypeOrmModule,
    ContractorGstsService,
  ],
})

export class ContractorGstsModule { }

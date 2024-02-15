import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { CommonService } from 'src/common/common.service';
import { JWT_MODULE_OPTIONS } from 'src/constants';
import { ContractorModule } from 'src/contractor/contractormodule';
import { TendorsController } from './tendor.controller';
import { Tendor } from './tendor.entity';
import { TendorsService } from './tendor.service';

@Module({
  controllers: [TendorsController],
  providers: [
    TendorsService,
    CommonService
  ],
  imports: [
    TypeOrmModule.forFeature([Tendor]),
    JwtModule.register(JWT_MODULE_OPTIONS),
    CommonModule,
    forwardRef(() => ContractorModule)

  ],
  exports: [
    TypeOrmModule,
    TendorsService
  ],
})

export class TendorsModule { }

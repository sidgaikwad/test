import { HttpModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { CommonService } from 'src/common/common.service';
import { JWT_MODULE_OPTIONS } from 'src/constants';
import { ContractorSalesController } from './contractor-sale.controller';
import { ContractorSale } from './contractor-sale.entity';
import { ContractorSalesService } from './contractor-sale.service';

@Module({
  controllers: [ContractorSalesController],
  providers: [
    ContractorSalesService,
    CommonService,
  ],
  imports: [
    TypeOrmModule.forFeature([ContractorSale]),
    JwtModule.register(JWT_MODULE_OPTIONS),
    CommonModule,
    HttpModule,
  ],
  exports: [
    TypeOrmModule,
    ContractorSalesService,
  ],
})

export class ContractorSalesModule { }

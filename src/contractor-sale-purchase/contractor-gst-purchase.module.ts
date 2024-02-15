import { HttpModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { CommonService } from 'src/common/common.service';
import { JWT_MODULE_OPTIONS } from 'src/constants';
import { ContractorGstPurchasesController } from './contractor-gst-purchase.controller';
import { ContractorGstPurchase } from './contractor-gst-purchase.entity';
import { ContractorGstPurchasesService } from './contractor-gst-purchase.service';

@Module({
  controllers: [ContractorGstPurchasesController],
  providers: [
    ContractorGstPurchasesService,
    CommonService,
  ],
  imports: [
    TypeOrmModule.forFeature([ContractorGstPurchase]),
    JwtModule.register(JWT_MODULE_OPTIONS),
    CommonModule,
    HttpModule,
  ],
  exports: [
    TypeOrmModule,
    ContractorGstPurchasesService,
  ],
})

export class ContractorGstPurchasesModule { }

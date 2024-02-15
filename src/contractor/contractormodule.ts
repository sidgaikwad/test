import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { CommonService } from 'src/common/common.service';
import { JWT_MODULE_OPTIONS } from 'src/constants';
import { TendorsModule } from 'src/tendor/tendor.module';
import { ContractorController } from './contractor.controller';
import { Contractor } from './contractor.entity';
import { ContractorService } from './contractor.service';

@Module({
  controllers: [ContractorController],
  providers: [
    ContractorService,
    CommonService
  ],
  imports: [
    TypeOrmModule.forFeature([Contractor]),
    JwtModule.register(JWT_MODULE_OPTIONS),
    CommonModule,
    TendorsModule
  ],
  exports: [
    TypeOrmModule,
    ContractorService
  ],
})

export class ContractorModule {}

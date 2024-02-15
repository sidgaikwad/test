import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { CommonService } from 'src/common/common.service';
import { JWT_MODULE_OPTIONS } from 'src/constants';
import { TendorsModule } from 'src/tendor/tendor.module';
import { SalesController } from './sales.controller';
import { Sales } from './sales.entity';
import { SalesService } from './sales.service';

@Module({
  controllers: [SalesController],
  providers: [
    SalesService,
    CommonService
  ],
  imports: [
    TypeOrmModule.forFeature([Sales]),
    JwtModule.register(JWT_MODULE_OPTIONS),
    CommonModule,
    TendorsModule
  ],
  exports: [
    TypeOrmModule,
    SalesService
  ],
})

export class SalesModule {}

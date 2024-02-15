import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { CommonService } from 'src/common/common.service';
import { JWT_MODULE_OPTIONS } from 'src/constants';
import { TendorsModule } from 'src/tendor/tendor.module';
import { RecieptController } from './reciept.controller';
import { Reciept } from './reciept.entity';
import { RecieptService } from './reciept.service';

@Module({
  controllers: [RecieptController],
  providers: [
    RecieptService,
    CommonService
  ],
  imports: [
    TypeOrmModule.forFeature([Reciept]),
    JwtModule.register(JWT_MODULE_OPTIONS),
    CommonModule,
    TendorsModule
  ],
  exports: [
    TypeOrmModule,
    RecieptService
  ],
})

export class RecieptModule {}

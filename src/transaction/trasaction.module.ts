import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { CommonService } from 'src/common/common.service';
import { JWT_MODULE_OPTIONS } from 'src/constants';
import { TransactionController } from './trasaction.controller';
import { Transaction } from './trasaction.entity';
import { TransactionService } from './trasaction.service';

@Module({
  controllers: [TransactionController],
  providers: [
    TransactionService,
    CommonService
  ],
  imports: [
    TypeOrmModule.forFeature([Transaction]),
    JwtModule.register(JWT_MODULE_OPTIONS),
    CommonModule,
  ],
  exports: [
    TypeOrmModule,
    TransactionService
  ],
})

export class TransactionModule {}

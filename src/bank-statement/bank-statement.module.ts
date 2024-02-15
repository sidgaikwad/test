import { HttpModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { CommonService } from 'src/common/common.service';
import { JWT_MODULE_OPTIONS } from 'src/constants';
import { BankStatementsController } from './bank-statement.controller';
import { BankStatement } from './bank-statement.entity';
import { BankStatementsService } from './bank-statement.service';

@Module({
  controllers: [BankStatementsController],
  providers: [
    BankStatementsService,
    CommonService,
  ],
  imports: [
    TypeOrmModule.forFeature([BankStatement]),
    JwtModule.register(JWT_MODULE_OPTIONS),
    CommonModule,
    HttpModule,
  ],
  exports: [
    TypeOrmModule,
    BankStatementsService,
  ],
})

export class BankStatementsModule { }

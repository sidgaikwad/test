import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { CommonService } from 'src/common/common.service';
import { JWT_MODULE_OPTIONS } from 'src/constants';
import { ForgotController } from './forgot.controller';
import { Forgot } from './forgot.entity';
import { ForgotService } from './forgot.service';

@Module({
  controllers: [ForgotController],
  providers: [
    ForgotService,
    CommonService
  ],
  imports: [
    TypeOrmModule.forFeature([Forgot]),
    JwtModule.register(JWT_MODULE_OPTIONS),
    CommonModule
  ],
  exports: [
    TypeOrmModule,
    ForgotService
  ],
})

export class ForgotModule {}

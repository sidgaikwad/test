import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { CommonService } from 'src/common/common.service';
import { JWT_MODULE_OPTIONS } from 'src/constants';
import { UnitsController } from './units.controller';
import { Units } from './units.entity';
import { UnitsService } from './units.service';

@Module({
  controllers: [UnitsController],
  providers: [
    UnitsService,
    CommonService
  ],
  imports: [
    TypeOrmModule.forFeature([Units]),
    JwtModule.register(JWT_MODULE_OPTIONS),
    CommonModule,
  ],
  exports: [
    TypeOrmModule,
    UnitsService
  ],
})

export class UnitsModule {}

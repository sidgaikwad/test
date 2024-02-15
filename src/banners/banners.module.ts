import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { CommonService } from 'src/common/common.service';
import { JWT_MODULE_OPTIONS } from 'src/constants';
import { BannersController } from './banners.controller';
import { Banner } from './banners.entity';
import { BannersService } from './banners.service';

@Module({
  controllers: [BannersController],
  providers: [
    BannersService,
    CommonService
  ],
  imports: [
    TypeOrmModule.forFeature([Banner]),
    JwtModule.register(JWT_MODULE_OPTIONS),
    CommonModule,
  ],
  exports: [
    TypeOrmModule,
    BannersService
  ],
})

export class BannersModule {}

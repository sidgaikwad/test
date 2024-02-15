import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { CommonService } from 'src/common/common.service';
import { JWT_MODULE_OPTIONS } from 'src/constants';
import { SettingsController } from './settings.controller';
import { Settings } from './settings.entity';
import { SettingsService } from './settings.service';

@Module({
  controllers: [SettingsController],
  providers: [
    SettingsService,
    CommonService
  ],
  imports: [
    TypeOrmModule.forFeature([Settings]),
    JwtModule.register(JWT_MODULE_OPTIONS),
    CommonModule,
  ],
  exports: [
    TypeOrmModule,
    SettingsService
  ],
})

export class SettingsModule {}

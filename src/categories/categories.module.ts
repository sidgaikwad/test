import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { CommonService } from 'src/common/common.service';
import { JWT_MODULE_OPTIONS } from 'src/constants';
import { CategoriesController } from './categories.controller';
import { Categories } from './categories.entity';
import { CategoriesService } from './categories.service';

@Module({
  controllers: [CategoriesController],
  providers: [
    CategoriesService,
    CommonService
  ],
  imports: [
    TypeOrmModule.forFeature([Categories]),
    JwtModule.register(JWT_MODULE_OPTIONS),
    CommonModule,
  ],
  exports: [
    TypeOrmModule,
    CategoriesService
  ],
})

export class CategoriesModule {}

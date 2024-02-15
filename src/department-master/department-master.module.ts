import { HttpModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { CommonService } from 'src/common/common.service';
import { JWT_MODULE_OPTIONS } from 'src/constants';
import { DepartmentMastersController } from './department-master.controller';
import { DepartmentMaster } from './department-master.entity';
import { DepartmentMastersService } from './department-master.service';

@Module({
  controllers: [DepartmentMastersController],
  providers: [
    DepartmentMastersService,
    CommonService,
  ],
  imports: [
    TypeOrmModule.forFeature([DepartmentMaster]),
    JwtModule.register(JWT_MODULE_OPTIONS),
    CommonModule,
    HttpModule,
  ],
  exports: [
    TypeOrmModule,
    DepartmentMastersService,
  ],
})

export class DepartmentMastersModule { }

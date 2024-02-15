import { HttpModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { CommonService } from 'src/common/common.service';
import { JWT_MODULE_OPTIONS } from 'src/constants';
import { DocumentMastersController } from './document-type-master.controller';
import { DocumentMaster } from './document-type-master.entity';
import { DocumentMastersService } from './document-type-master.service';

@Module({
  controllers: [DocumentMastersController],
  providers: [
    DocumentMastersService,
    CommonService,
  ],
  imports: [
    TypeOrmModule.forFeature([DocumentMaster]),
    JwtModule.register(JWT_MODULE_OPTIONS),
    CommonModule,
    HttpModule,
  ],
  exports: [
    TypeOrmModule,
    DocumentMastersService,
  ],
})

export class DocumentMastersModule { }

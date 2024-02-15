import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { CommonService } from 'src/common/common.service';
import { JWT_MODULE_OPTIONS } from 'src/constants';
import { DocumentsController } from './document.controller';
import { Documents } from './document.entity';
import { DocumentsService } from './document.service';

@Module({
  controllers: [DocumentsController],
  providers: [
    DocumentsService,
    CommonService
  ],
  imports: [
    TypeOrmModule.forFeature([Documents]),
    JwtModule.register(JWT_MODULE_OPTIONS),
    CommonModule,
  ],
  exports: [
    TypeOrmModule,
    DocumentsService
  ],
})

export class DocumentsModule {}

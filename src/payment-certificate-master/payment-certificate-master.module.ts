import { HttpModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { CommonService } from 'src/common/common.service';
import { JWT_MODULE_OPTIONS } from 'src/constants';
import { PaymentCertificateMastersController } from './payment-certificate-master.controller';
import { PaymentCertificateMaster } from './payment-certificate-master.entity';
import { PaymentCertificateMastersService } from './payment-certificate-master.service';

@Module({
  controllers: [PaymentCertificateMastersController],
  providers: [
    PaymentCertificateMastersService,
    CommonService,
  ],
  imports: [
    TypeOrmModule.forFeature([PaymentCertificateMaster]),
    JwtModule.register(JWT_MODULE_OPTIONS),
    CommonModule,
    HttpModule,
  ],
  exports: [
    TypeOrmModule,
    PaymentCertificateMastersService,
  ],
})

export class PaymentCertificateMastersModule { }

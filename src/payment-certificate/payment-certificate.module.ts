import { HttpModule, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { CommonService } from 'src/common/common.service';
import { JWT_MODULE_OPTIONS } from 'src/constants';
import { PaymentCertificatesController } from './payment-certificate.controller';
import { PaymentCertificate } from './payment-certificate.entity';
import { PaymentCertificatesService } from './payment-certificate.service';

@Module({
  controllers: [PaymentCertificatesController],
  providers: [
    PaymentCertificatesService,
    CommonService,
  ],
  imports: [
    TypeOrmModule.forFeature([PaymentCertificate]),
    JwtModule.register(JWT_MODULE_OPTIONS),
    CommonModule,
    HttpModule,
  ],
  exports: [
    TypeOrmModule,
    PaymentCertificatesService,
  ],
})

export class PaymentCertificatesModule { }

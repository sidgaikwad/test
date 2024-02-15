import { MailerModule } from '@nestjs-modules/mailer';
import { forwardRef, Module } from '@nestjs/common';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from 'nestjs-config';
import * as path from 'path';
import { AdminsRolesModule } from './admins-roles/admins-roles.module';
import { AdminsModule } from './admins/admins.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BannersModule } from './banners/banners.module';
import { CategoriesModule } from './categories/categories.module';
import { CommonModule } from './common/common.module';
import { CommonService } from './common/common.service';
import { JWT_MODULE_OPTIONS } from './constants';
import { AllExceptionsFilter } from './filters/all-exceptions-filter';
import { ForgotModule } from './forgot/forgot.module';
import { RolesGuard } from './guards/roles.guard';
import { SettingsModule } from './settings/settings.module';
import { ScheduleModule } from '@nestjs/schedule';
import { UnitsModule } from './units/units.module';
import { ContractorModule } from './contractor/contractormodule';
import { GSTsModule } from './gst/gst.module';
import { TendorsModule } from './tendor/tendor.module';
import { DocumentsModule } from './document/document.module';
import { DepartmentMastersModule } from './department-master/department-master.module';
import { DocumentMastersModule } from './document-type-master/document-type-master.module';
import { TransactionModule } from './transaction/trasaction.module';
import { BankGuranteesModule } from './bankgurantee/bankgurantee.module';
import { SalesModule } from './sales/sales.module';
import { RecieptModule } from './reciept/reciept.module';
import { ContractorGstsModule } from './contractor-gst/contractor-gst.module';
import { ContractorSalesModule } from './contractor-sale/contractor-sale.module';
import { ContractorGstPurchasesModule } from './contractor-sale-purchase/contractor-gst-purchase.module';
import { BankStatementsModule } from './bank-statement/bank-statement.module';
import { PaymentCertificateMastersModule } from './payment-certificate-master/payment-certificate-master.module';
import { PaymentCertificatesModule } from './payment-certificate/payment-certificate.module';
import { PokemonController } from './pokemons/pokemon.controller';
import { PokemonModule } from './pokemons/pokemon.module';

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule,
    ScheduleModule.forRoot(),
    ConfigModule.load(path.resolve(__dirname, 'config', '**', '!(*.d).{ts,js}'), {
      path: path.resolve(process.cwd(), 'env', !ENV ? '.env' : `.env.${ENV}`),
    }),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
          user: 'no-reply@algoocean.com',
          pass: 'yeeufyacrplteobf'
        }
      },
      defaults: {
        forceEmbeddedImages: true,
        from: '"Algoocean" <no-reply@algoocean.com>',
      },
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => config.get('database'),
      inject: [ConfigService],
    }),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register(JWT_MODULE_OPTIONS),
    MulterModule,
    CommonModule,
    AdminsModule,
    AdminsRolesModule,
    BannersModule,
    DepartmentMastersModule,
    CategoriesModule,
    ForgotModule,
    SettingsModule,
    UnitsModule,
    ContractorModule,
    TendorsModule,
    GSTsModule,
    DocumentsModule,
    DocumentMastersModule,
    TransactionModule,
    BankGuranteesModule,
    SalesModule,
    RecieptModule,
    ContractorGstsModule,
    ContractorSalesModule,
    ContractorGstPurchasesModule,
    BankStatementsModule,
    PaymentCertificateMastersModule,
    PaymentCertificatesModule,PokemonModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    CommonService,
  ],
  exports: [
    CommonService
  ]
})
export class AppModule { }

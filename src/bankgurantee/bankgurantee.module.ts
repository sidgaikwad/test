import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonModule } from 'src/common/common.module';
import { CommonService } from 'src/common/common.service';
import { JWT_MODULE_OPTIONS } from 'src/constants';
import { SettingsModule } from 'src/settings/settings.module';
// import { ContractorModule } from 'src/contractor/contractormodule';
import { BankGuranteesController } from './bankgurantee.controller';
import { BankGurantee } from './bankgurantee.entity';
import { BankGuranteesService } from './bankgurantee.service';
import { BankGuranteeSubscriber } from './bankgurantee.subscriber';
import { TendorsModule } from 'src/tendor/tendor.module';

@Module({
  controllers: [BankGuranteesController],
  providers: [
    BankGuranteesService,
    CommonService,
    BankGuranteeSubscriber
  ],
  imports: [
    TypeOrmModule.forFeature([BankGurantee]),
    JwtModule.register(JWT_MODULE_OPTIONS),
    CommonModule,
    SettingsModule,
    TendorsModule

    // forwardRef(() => ContractorModule)

  ],
  exports: [
    TypeOrmModule,
    BankGuranteesService
  ],
})

export class BankGuranteesModule { }

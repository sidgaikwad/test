import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './admins.entity';
import { AdminsController } from './admins.controller';
import { AdminsService } from './admins.service';
import { JWT_MODULE_OPTIONS } from '../constants';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from 'src/strategy/local.strategy';
import { CommonService } from 'src/common/common.service';
import { CommonModule } from 'src/common/common.module';
import { AdminsRolesModule } from 'src/admins-roles/admins-roles.module';
import { AdminsSubscriber } from './admins.subscriber';
import { ForgotModule } from 'src/forgot/forgot.module';
import { CategoriesModule } from 'src/categories/categories.module';

@Module({
  controllers: [AdminsController],
  providers: [
    AdminsService,
    LocalStrategy,
    CommonService,
    AdminsSubscriber
  ],
  imports: [
    TypeOrmModule.forFeature([Admin]),
    JwtModule.register(JWT_MODULE_OPTIONS),
    CommonModule,
    AdminsRolesModule,
    ForgotModule,
    CategoriesModule
  ],
  exports: [
    TypeOrmModule,
    AdminsService,
  ],
})
export class AdminsModule {

}

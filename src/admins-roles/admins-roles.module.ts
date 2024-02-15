import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminsRole } from './adminsRole.entity';
import { AdminsRolesController } from './admins-roles.controller';
import { AdminsRolesService } from './admins-roles.service';

@Module({
  controllers: [AdminsRolesController],
  providers: [
    AdminsRolesService,
  ],
  imports: [
    TypeOrmModule.forFeature([AdminsRole]),
  ],
  exports: [
    TypeOrmModule,
    AdminsRolesService,
  ],
})
export class AdminsRolesModule { }

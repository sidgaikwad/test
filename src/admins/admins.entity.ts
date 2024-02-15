import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { encryptionTransformer } from 'src/entities/encryption.transformer';
import { AdminsRole } from 'src/admins-roles/adminsRole.entity';
@Entity({ name: 'admins' })
export class Admin {
  @ApiProperty({ nullable: false, uniqueItems: true })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ nullable: false, default: true })
  @Column({ nullable: false, default: true })
  enabled: boolean;

  @ApiProperty({ nullable: false })
  @Column({ nullable: false })
  fullName: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  contactNumber: string;

  @ApiProperty({ maxLength: 200, uniqueItems: true, nullable: true })
  @Column({ length: 200, unique: true, nullable: true })
  email: string;

  @ApiProperty({ nullable: false })
  @Column({ nullable: false })
  password: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  avatar: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  gender: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  adminsRoleId: number;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  flastLogin: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  createdBy: number;

  @ApiProperty({ nullable: false })
  @CreateDateColumn()
  createdTimestamp: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  accessToken: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  updatedBy: number;

  @ApiProperty({ nullable: false })
  @UpdateDateColumn()
  updatedTimestamp: string;

  @ApiProperty({ enum: ['superadmin', 'admin'] })
  @ManyToOne(type => AdminsRole)
  adminsRole: AdminsRole;
}

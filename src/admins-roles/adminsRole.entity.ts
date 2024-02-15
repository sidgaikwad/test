import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
@Entity({ name: 'admins_roles' })
export class AdminsRole {

  @ApiProperty({ nullable: false, uniqueItems: true })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ default: true, nullable: false })
  @Column({ default: true, nullable: false })
  enabled: boolean;

  @ApiProperty()
  @Column({ length: 25, unique: true, nullable: false })
  name: string;

  @ApiProperty()
  @Column({ nullable: true })
  createdBy: number;

  @ApiProperty()
  @CreateDateColumn()
  createdTimestamp: string;

  @ApiProperty()
  @Column({ nullable: true })
  updatedBy: number;

  @ApiProperty()
  @UpdateDateColumn()
  updatedTimestamp: string;
}

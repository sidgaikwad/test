import { ApiProperty } from '@nestjs/swagger';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'categories' })
export class Categories {
  @ApiProperty({ nullable: false, uniqueItems: true })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ default: true, nullable: false })
  @Column({ default: true, nullable: false })
  enabled: boolean;

  @ApiProperty({ nullable: false, uniqueItems: true })
  @Column({ nullable: false, unique: true })
  name: string;

  @ApiProperty({ nullable: true, default: false })
  @Column({ nullable: true, default: false })
  isDeleted: boolean;

  @ApiProperty({ nullable: false })
  @Column({ nullable: false })
  image: string;

  @ApiProperty({ default: false, nullable: false })
  @Column({ default: false, nullable: false })
  feature: boolean;

  @ApiProperty({ default: false, nullable: false })
  @Column({ default: false, nullable: false })
  isSubCategory: boolean;

  @ApiProperty({ nullable: false })
  @Column({ nullable: false })
  priority: number;

  @ApiProperty({ nullable: false })
  @CreateDateColumn()
  createdTimestamp: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  createdBy: number;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  updatedBy: number;

  @ApiProperty({ nullable: false })
  @UpdateDateColumn()
  updatedTimestamp: string;
}

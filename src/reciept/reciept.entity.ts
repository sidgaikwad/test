import { ApiProperty } from '@nestjs/swagger';
import { Categories } from 'src/categories/categories.entity';
import { Sales } from 'src/sales/sales.entity';
import { Tendor } from 'src/tendor/tendor.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'reciept' })
export class Reciept {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ default: true, nullable: false })
  @Column({ default: true, nullable: false })
  enabled: boolean;

  @ApiProperty({ nullable: true, })
  @Column({ type: 'float', nullable: true })
  amount: number;

  @ApiProperty({ nullable: false, })
  @Column({ nullable: false })
  date: string;

  @ApiProperty({ nullable: true, })
  @Column({ type: 'float', nullable: true })
  deductionAmount: number;

  @ApiProperty({ nullable: false, })
  @Column({ nullable: false })
  deductionType: string;


  @ApiProperty({ nullable: true, })
  @Column({ type: 'float', nullable: true })
  securityDeposit: number;

  @ApiProperty({ nullable: false, })
  @Column({ nullable: false })
  description: string;

  @ApiProperty({ nullable: false, })
  @Column({ nullable: false })
  tendorId: number;

  @ApiProperty({ nullable: false, })
  @Column({ nullable: false })
  salesId: number;

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

  @ApiProperty({ type: () => Tendor })
  @ManyToOne(type => Tendor)
  tendor: Tendor;

  @ApiProperty({ type: () => Sales })
  @ManyToOne(type => Sales)
  sales: Sales;


}

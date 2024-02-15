import { ApiProperty } from '@nestjs/swagger';
import { Admin } from 'src/admins/admins.entity';
import { Contractor } from 'src/contractor/contractor.entity';
import { DocumentMaster } from 'src/document-type-master/document-type-master.entity';
import { Tendor } from 'src/tendor/tendor.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'transaction' })
export class Transaction {
  @ApiProperty({ nullable: false, uniqueItems: true })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ default: true, nullable: false })
  @Column({ default: true, nullable: false })
  enabled: boolean;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  contractorId: number;

  @ApiProperty({ type: "float",nullable: true })
  @Column({ type: "float", nullable: true })
  amount: number;

  @ApiProperty({ nullable: false })
  @CreateDateColumn({ nullable: false })
  date: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  desc: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  transactionType: number;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  tendorId: number

  @ApiProperty({ nullable: true })
  @Column({ nullable: true,default:false })
  isVerified: boolean

  @ApiProperty({ nullable: true })
  @Column({ nullable: true,default:false })
  isAddedToConGSt: boolean

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  isVerifiedById: number

  @ApiProperty({ nullable: true })
  @Column({ nullable: true,default:false })
  isAddedToBankStatement: boolean

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

  @ApiProperty()
  @ManyToOne(() => Contractor)
  contractor: Contractor

  @ApiProperty()
  @ManyToOne(() => Tendor)
  tendor: Tendor

  @ApiProperty()
  @ManyToOne(() => Admin)
  isVerifiedBy: Admin
  // @ApiProperty()
  // @ManyToOne(() => Tendor)
  // tendor: Tendor;

  // @ApiProperty()
  // @ManyToOne(() => DocumentMaster)
  // documentMaster: DocumentMaster

}


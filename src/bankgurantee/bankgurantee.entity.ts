import { ApiProperty } from '@nestjs/swagger';
import { Float } from 'aws-sdk/clients/ec2';
import { Contractor } from 'src/contractor/contractor.entity';
import { DepartmentMaster } from 'src/department-master/department-master.entity';
import { Tendor } from 'src/tendor/tendor.entity';
import {
  Column,
  CreateDateColumn,
  Entity,

  JoinColumn,

  JoinTable,

  ManyToMany,

  ManyToOne,

  OneToMany,

  OneToOne,

  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
@Entity({ name: 'bankGurantee' })
export class BankGurantee {
  @ApiProperty({ nullable: false, uniqueItems: true })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ default: true, nullable: false })
  @Column({ default: true, nullable: false })
  enabled: boolean;

  @ApiProperty({ nullable: false })
  @Column({ nullable: false })
  title: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  tendorId: number;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  description: string;

  @ApiProperty({ nullable: true ,default:false})
  @Column({ nullable: true,default:false })
  isBgReleased: boolean;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  bgReleaseAmount: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  bgReleaseDate: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  fdrDeposit: number;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  fdrNo: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  fdrDate: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  bankGuranteeExpiry: string;

  @ApiProperty({ type: "float", nullable: true })
  @Column({ type: "float", nullable: true })
  amount: number;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  createdBy: number;

  @ApiProperty({ nullable: false })
  @CreateDateColumn()
  createdTimestamp: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  updatedBy: number;

  @ApiProperty({ nullable: false })
  @UpdateDateColumn()
  updatedTimestamp: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true ,default:false})
  isFdr: boolean;

  @ManyToOne(() => Tendor, { eager: true })
  @JoinColumn()
  tendor: Tendor;

}

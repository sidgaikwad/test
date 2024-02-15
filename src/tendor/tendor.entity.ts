import { ApiProperty } from '@nestjs/swagger';
import { BankGurantee } from 'src/bankgurantee/bankgurantee.entity';
import { Contractor } from 'src/contractor/contractor.entity';
import { DepartmentMaster } from 'src/department-master/department-master.entity';
import {
  Column,
  CreateDateColumn,
  Entity,

  JoinTable,

  ManyToMany,

  ManyToOne,

  OneToMany,

  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
@Entity({ name: 'tendor' })
export class Tendor {
  @ApiProperty({ nullable: false, uniqueItems: true })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ default: true, nullable: false })
  @Column({ default: true, nullable: false })
  enabled: boolean;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  tendorNumber: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  departmentId: number;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  name: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  bidType: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  tendorType: boolean;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  bidSystem: number;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  tendorClosingDate: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  dateUploadTender: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  policyExpiryDate: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  extensionTill: string;

  @ApiProperty({ nullable: true })
  @Column( {nullable: true })
  preBidMeeting: boolean;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  advertisedValue: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  revisedValue: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  acceptanceLetterNumber: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  contractAgreementNumber: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  tenderingSection: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  biddingStyle: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  biddingUnit: number;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true, type: 'float' })
  earnestmoney: number;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  validityOffer: number;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  bidSecurityDeclaration: boolean;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  tenderDocCost: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  periodComp: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  contractType: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  contractCat: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  bidStartDate: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  jointVenture: boolean;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  rankingOrder: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  expenditureType: string;

  @ApiProperty({ nullable: true, isArray: true })
  @Column({ nullable: true, array: true })
  contractorIds: number;

  @ApiProperty({ nullable: true, isArray: true })
  @Column({ nullable: true, array: true })
  bankgIds: number;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  isEmdReturn: boolean;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true,default:false })
  isCompleted: boolean;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  completedDate: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  emdReturnDate: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  preBidDate: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  createdBy: number;

  @ApiProperty({ nullable: false })
  @CreateDateColumn()
  createdTimestamp: string;


  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  status: string;


  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  updatedBy: number;



  @ApiProperty({ nullable: false })
  @UpdateDateColumn()
  updatedTimestamp: string;


  @ManyToMany(() => Contractor, { eager: true })
  @JoinTable()
  contractor: Contractor[];

  @ApiProperty()
  @ManyToOne(type => DepartmentMaster)
  department: DepartmentMaster;

  @ManyToMany(() => BankGurantee, { eager: true })
  @JoinTable()
  bankg: BankGurantee[];

  // @ApiProperty()
  // @OneToMany (type=>BankGurantee, (bankg)=>bankg.tendor)
  // bankg:BankGurantee[]
}

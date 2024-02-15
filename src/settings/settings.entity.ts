import { ApiProperty } from '@nestjs/swagger';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'settings' })
export class Settings {
  @ApiProperty({ nullable: false, uniqueItems: true })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ default: true, nullable: false })
  @Column({ default: true, nullable: false })
  enabled: boolean;

  // @ApiProperty({ nullable: false })
  // @Column({ nullable: false })
  // version: string;

  // @ApiProperty({ nullable: false })
  // @Column({ nullable: false })
  // appName: string;

  // @ApiProperty({ nullable: true })
  // @Column({ nullable: true })
  // whatappNumber: string;

  // @ApiProperty({ nullable: true })
  // @Column({ nullable: true })
  // iosVersion: string;

  // @ApiProperty({ nullable: false })
  // @Column({ nullable: false })
  // shareAppMessage: string;

  // @ApiProperty({ nullable: false })
  // @Column({ nullable: false })
  // contactNumber: string;

  // @ApiProperty({ nullable: true })
  // @Column({ nullable: true })
  // playstoreLink: string;

  // @ApiProperty({ nullable: true })
  // @Column({ nullable: true })
  // appstoreLink: string;

  // @ApiProperty({ nullable: true })
  // @Column({ nullable: true })
  // aboutUsLink: string;

  // @ApiProperty({ nullable: true })
  // @Column({ nullable: true })
  // contactUsLink: string;

  // @ApiProperty({ nullable: true })
  // @Column({ nullable: true })
  // termsAndConditionsLink: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  bgLimit: number;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  totalBgTaken: number;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  extraBgTakenBalance: number;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  margin: number;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  marginreqOnBgLimit: number;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  extraMarReqForExtraBg: number;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  totalFdrReq: number;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  actualFdrGiven: number;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  extraFdrGivenToBank: number;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true,default:false })
  isFdr: boolean;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  finalFdrAmount: number;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  marginreqOnBgLimitInterest: number;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  fdrDetail: string;

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

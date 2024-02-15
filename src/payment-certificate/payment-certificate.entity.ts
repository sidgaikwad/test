import { ApiProperty } from '@nestjs/swagger';
import { PaymentCertificateMaster } from 'src/payment-certificate-master/payment-certificate-master.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'payment-certificate' })
export class PaymentCertificate {
    @ApiProperty({ nullable: false, uniqueItems: true })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ default: true, nullable: false })
    @Column({ default: true, nullable: false })
    enabled: boolean;

    @ApiProperty({ nullable: true, })
    @Column({ type: 'float4', nullable: true })
    base: number;

    @ApiProperty({ nullable: true, })
    @Column({ type: 'float4', nullable: true })
    cgst: number;

    @ApiProperty({ nullable: true, })
    @Column({ type: 'float4', nullable: true })
    sgst: number;

    @ApiProperty({ nullable: true, })
    @Column({ type: 'float4', nullable: true })
    igst: number;

    @ApiProperty({ nullable: true, })
    @Column({ type: 'float4', nullable: true })
    gross: number;

    @ApiProperty({ nullable: false, })
    @Column({ nullable: false })
    description: string;

    @ApiProperty({ nullable: false, })
    @Column({ nullable: false })
    date: string;

    @ApiProperty({ nullable: true, })
    @Column({ type: 'float4', nullable: true })
    gstAmt: number;

    @ApiProperty({ nullable: true, })
    @Column({ type: 'float4', nullable: true })
    deductionAmt: number;

    @ApiProperty({ nullable: true, })
    @Column({ type: 'float4', nullable: true })
    netAmountInAccount: number;

    @ApiProperty({ nullable: true, })
    @Column({ type: 'float4', nullable: true })
    comissionOnGrossAmt: number;

    @ApiProperty({ nullable: true, })
    @Column({ type: 'float4', nullable: true })
    otherAmt: number;

    @ApiProperty({ nullable: true, })
    @Column({ type: 'float4', nullable: true })
    payableAmt: number;

    @ApiProperty({ nullable: true, })
    @Column({ type: 'float4', nullable: true })
    payableAmtToContractor: number;

    @ApiProperty({ nullable: true, })
    @Column({ type: 'float4', nullable: true })
    payableGross: number;

    @ApiProperty({ nullable: true, })
    @Column({ type: 'float4', nullable: true })
    payableBase: number;

    @ApiProperty({ nullable: true, })
    @Column({ type: 'float4', nullable: true })
    payableGst: number;

    @ApiProperty({ nullable: true, })
    @Column({ type: 'float4', nullable: true })
    percentcomissionOnGrossAmt: number;

    @ApiProperty({ nullable: true, })
    @Column({ type: 'float4', nullable: true })
    paymentCertificateMasterId: number;

    @ApiProperty({ nullable: true })
    @Column({ nullable: true })
    createdBy: number;

    @ApiProperty({ nullable: false })
    @CreateDateColumn()
    createdTimestamp: string;

    @ApiProperty({ nullable: true })
    @Column({ nullable: true })
    updatedBy: number;

    @ApiProperty({ nullable: true })
    @UpdateDateColumn()
    updatedTimestamp: string;

    @ApiProperty()
    @ManyToOne(type => PaymentCertificateMaster, { onDelete: 'CASCADE' })
    paymentCertificateMaster: PaymentCertificateMaster;
}

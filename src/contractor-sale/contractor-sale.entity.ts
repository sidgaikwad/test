import { ApiProperty } from '@nestjs/swagger';
import { ContractorGst } from 'src/contractor-gst/contractor-gst.entity';
import { Tendor } from 'src/tendor/tendor.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'contractor-gst-sale' })
export class ContractorSale {
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
    tendorId: number;

    @ApiProperty({ nullable: true })
    @Column({ nullable: true })
    billNumber: string;

    @ApiProperty({ nullable: false, })
    @Column({ nullable: false })
    date: string;

    @ApiProperty({ nullable: true })
    @Column({ nullable: true })
    contractorGstId: number;

    @ApiProperty({ nullable: true })
    @Column({ nullable: true, type: 'float' })
    discount: number;

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
    @ManyToOne(type => ContractorGst, { onDelete: 'CASCADE' })
    contractorGst: ContractorGst;

    @ApiProperty({ type: () => Tendor })
    @ManyToOne(type => Tendor, { onDelete: 'CASCADE' })
    tendor: Tendor;
}

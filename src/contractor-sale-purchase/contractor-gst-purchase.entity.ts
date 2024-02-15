import { ApiProperty } from '@nestjs/swagger';
import { ContractorGst } from 'src/contractor-gst/contractor-gst.entity';
import { Tendor } from 'src/tendor/tendor.entity';
import { Transaction } from 'src/transaction/trasaction.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'contractor-gst-purchase' })
export class ContractorGstPurchase {
    @ApiProperty({ nullable: false, uniqueItems: true })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ default: true, nullable: false })
    @Column({ default: true, nullable: false })
    enabled: boolean;

    @ApiProperty({ nullable: true, })
    @Column({ nullable: true })
    date: string;

    @ApiProperty({ nullable: true, })
    @Column({ nullable: true })
    description: string;

    @ApiProperty({ nullable: true, })
    @Column({ nullable: true })
    amount: string;

    @ApiProperty({ nullable: true, })
    @Column({ nullable: true })
    tendorId: number;

    @ApiProperty({ nullable: true })
    @Column({ nullable: true })
    contractorGstId: number; 

    @ApiProperty({ nullable: true })
    @Column({ nullable: true,type:'float' })
    gstPercent: number; 

    @ApiProperty({ nullable: true })
    @Column({ nullable: true,type:'float' })
    itcAmount: number; 

    @ApiProperty({ nullable: true, })
    @Column({ nullable: true })
    transactionId: number;

    @ApiProperty({ nullable: true, })
    @Column({ nullable: true })
    isVerified: boolean;

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
    @ManyToOne(type => ContractorGst,{onDelete:'CASCADE'})
    contractorGst: ContractorGst;

    @ApiProperty({ type: () => Tendor })
    @ManyToOne(type => Tendor,{onDelete:'CASCADE'})
    tendor: Tendor;

    @ApiProperty({ type: () => Transaction })
    @ManyToOne(type => Transaction,{onDelete:'CASCADE'})
    transaction: Transaction;

}

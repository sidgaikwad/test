import { ApiProperty } from '@nestjs/swagger';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'bank-statement' })
export class BankStatement {
    @ApiProperty({ nullable: false, uniqueItems: true })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ default: true, nullable: false })
    @Column({ default: true, nullable: false })
    enabled: boolean;

    @ApiProperty({ type: "float", nullable: true })
    @Column({ type: "float", nullable: true })
    amount: number;

    @ApiProperty({ nullable: true })
    @CreateDateColumn({ nullable: true })
    date: string;

    @ApiProperty({ nullable: true })
    @Column({ nullable: true })
    desc: string;

    // 0 credit
    // 1 debit
    @ApiProperty({ nullable: true })
    @Column({ nullable: true })
    transactionType: number;

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
}

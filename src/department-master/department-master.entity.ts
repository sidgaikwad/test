import { ApiProperty } from '@nestjs/swagger';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'department-master' })
export class DepartmentMaster {
    @ApiProperty({ nullable: false, uniqueItems: true })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ default: true, nullable: false })
    @Column({ default: true, nullable: false })
    enabled: boolean;

    @ApiProperty({ nullable: false })
    @Column({ nullable: false })
    name: string;

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

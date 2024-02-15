import { ApiProperty } from '@nestjs/swagger';
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn, getManager, AfterInsert } from 'typeorm';

// import { LocationsPhoto } from 'src/locations-photos/locationsPhoto.entity';
@Entity({ name: 'forgot' })
export class Forgot {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({ default: true })
    enabled: boolean;

    @ApiProperty()
    @Column({ nullable: true })
    userId: number;

    @ApiProperty()
    @Column({ nullable: false, default: false })
    consumed: boolean;

    @ApiProperty()
    @Column({ nullable: true })
    sessionId: string;

    @ApiProperty()
    @CreateDateColumn()
    createdTimestamp: string;

    @ApiProperty()
    @Column({ nullable: true })
    createdBy: number;

    @ApiProperty()
    @Column({ nullable: true })
    updatedBy: number;

    @ApiProperty()
    @UpdateDateColumn()
    updatedTimestamp: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn, getManager, AfterInsert, OneToMany } from 'typeorm';

// import { LocationsPhoto } from 'src/locations-photos/locationsPhoto.entity';
@Entity({ name: 'banners' })
export class Banner {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column({ default: true, nullable: false })
    enabled: boolean;

    @ApiProperty()
    @Column({ nullable: false })
    image: string;

    @ApiProperty()
    @Column({ nullable: true })
    order: number;

    @ApiProperty()
    @Column({ nullable: true })
    redirectionOption: number;

    @ApiProperty()
    @Column({ nullable: true })
    redirectionValue: number;

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

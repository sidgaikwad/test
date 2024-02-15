import { ApiProperty } from "@nestjs/swagger";
import { Admin } from "src/admins/admins.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'pokemon'})

export class PokemonEntity{
    @ApiProperty({ nullable: false, uniqueItems: true })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ nullable: false })
    @Column({ nullable: false})
    name: string;

    @ApiProperty({ nullable: false })
    @Column({ nullable: false})
    type: string;

    @ApiProperty({ nullable: false })
    @Column({ nullable: false})
    level: number;

    @ApiProperty({ nullable: false, })
    @Column({ nullable: false })
    adminsId: number;

    @ApiProperty({ type: () => Admin })
    @ManyToOne(type => Admin, { onDelete: 'CASCADE' })
    admins: Admin;
}


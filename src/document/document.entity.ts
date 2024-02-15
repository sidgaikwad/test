import { ApiProperty } from '@nestjs/swagger';
import { DocumentMaster } from 'src/document-type-master/document-type-master.entity';
import { Tendor } from 'src/tendor/tendor.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'documents' })
export class Documents {
  @ApiProperty({ nullable: false, uniqueItems: true })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ default: true, nullable: false })
  @Column({ default: true, nullable: false })
  enabled: boolean;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  title: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  description: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  image: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  document: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  tendorId: number;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true })
  documentMasterId: number;

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

  @ApiProperty()
  @ManyToOne(() => Tendor)
  tendor: Tendor;

  @ApiProperty()
  @ManyToOne(() => DocumentMaster)
  documentMaster: DocumentMaster
}


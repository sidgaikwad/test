import { ApiProperty } from '@nestjs/swagger';
import { Categories } from 'src/categories/categories.entity';
import { Tendor } from 'src/tendor/tendor.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'contractor' })
export class Contractor {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ default: true, nullable: false })
  @Column({ default: true, nullable: false })
  enabled: boolean;

  @ApiProperty({ nullable: false,  })
  @Column({ nullable: false})
  name: string;

  @ApiProperty({ nullable: true,  })
  @Column({ nullable: true})
  tendorId: number;

  @ApiProperty({ nullable: false,  })
  @Column({ nullable: false})
  contactNum: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true})
  email: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true})
  gstNo: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true})
  panCardNo: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true})
  add: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true})
  businessName: string;


  @ApiProperty({ nullable: true, default: false })
  @Column({ nullable: true, default: false })
  isDeleted: boolean;

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

  @ApiProperty({ nullable: true })
  @Column({ nullable: true})
  bankName: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true})
  accountNo: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true})
  ifsc: string;

  @ApiProperty({ nullable: true })
  @Column({ nullable: true})
  branchName: string;

  @ApiProperty({ type: () => Tendor })
  @ManyToOne( type => Tendor)
  tendor: Tendor;

  
}

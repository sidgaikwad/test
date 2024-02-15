import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
export class BannersDTO {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly image: string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    readonly order: number;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    readonly redirectTo: number;
}

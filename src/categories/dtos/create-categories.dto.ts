import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsDecimal, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
export class CategoriesDTO {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    readonly image: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    readonly priority: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsBoolean()
    readonly feature: boolean;
}

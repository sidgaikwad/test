import { Controller, Get, HttpStatus, Param, ParseIntPipe, Post, Query, Res } from "@nestjs/common";
import { Crud, CrudController } from "@nestjsx/crud";
import { PokemonEntity } from "./pokemon.entity";
import { ApiTags } from "@nestjs/swagger";
import { PokemonService } from "./pokemon.service";
import { createQueryBuilder, getRepository } from "typeorm";

@Crud({
    model: {
        type: PokemonEntity,
    },query:{
        join:{
            admin:{
                eager:true
            }
        }
    }
})

@ApiTags('pokemon')
@Controller('pokemon')

export class PokemonController implements CrudController<PokemonEntity> {

    constructor(
        public service: PokemonService
        ) {}

    @Get('count')
    async getCount(@Query() query, @Res() res) {
        const count = await this.service.getCount(query);
        return res.status(HttpStatus.OK).json(count);
    }

    @Get('pokemon')
    async getpokemon(@Res() res){
        const pokemon = await this.service.getpokemon()
        return res.status(HttpStatus.OK).json(pokemon);
    }

    @Get(':id')
    async getpokemonId(@Param('id', ParseIntPipe) id: number, @Res() res){
        const pokemon = await this.service.getpokemonbyId(id)
        return res.status(HttpStatus.OK).json(pokemon);
    }
}
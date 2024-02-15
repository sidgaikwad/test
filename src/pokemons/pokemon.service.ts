import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { PokemonEntity } from "./pokemon.entity";
import { Repository, createQueryBuilder, getRepository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()

export class PokemonService extends TypeOrmCrudService<PokemonEntity>{

    private repository: Repository<PokemonEntity> = null;

    constructor(
        @InjectRepository(PokemonEntity) pokemonRepository: Repository<PokemonEntity>,
    ) {
        super(pokemonRepository);
        this.repository = pokemonRepository;
    }

    async getCount(query: any): Promise<any> {
        return await this.count();
    }

    async getpokemon() {
        const pokemon1 = await this.repository.createQueryBuilder('pokemon').where("pokemon.id = :id", { id: 1 }).getOne()
        return pokemon1;
    }

    async getpokemonbyId(id: number){
        const pokemonbyId = await this.repository.findOne({id})
        return pokemonbyId;
    }
}
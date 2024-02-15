import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { PokemonEntity } from "./pokemon.entity";
import { Repository } from "typeorm";
export declare class PokemonService extends TypeOrmCrudService<PokemonEntity> {
    private repository;
    constructor(pokemonRepository: Repository<PokemonEntity>);
    getCount(query: any): Promise<any>;
    getpokemon(): Promise<PokemonEntity>;
    getpokemonbyId(id: number): Promise<PokemonEntity>;
}

import { CrudController } from "@nestjsx/crud";
import { PokemonEntity } from "./pokemon.entity";
import { PokemonService } from "./pokemon.service";
export declare class PokemonController implements CrudController<PokemonEntity> {
    service: PokemonService;
    constructor(service: PokemonService);
    getCount(query: any, res: any): Promise<any>;
    getpokemon(res: any): Promise<any>;
    getpokemonId(id: number, res: any): Promise<any>;
}

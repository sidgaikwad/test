"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonService = void 0;
const common_1 = require("@nestjs/common");
const crud_typeorm_1 = require("@nestjsx/crud-typeorm");
const pokemon_entity_1 = require("./pokemon.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let PokemonService = class PokemonService extends crud_typeorm_1.TypeOrmCrudService {
    constructor(pokemonRepository) {
        super(pokemonRepository);
        this.repository = null;
        this.repository = pokemonRepository;
    }
    async getCount(query) {
        return await this.count();
    }
    async getpokemon() {
        const pokemon1 = await this.repository.createQueryBuilder('pokemon').where("pokemon.id = :id", { id: 1 }).getOne();
        return pokemon1;
    }
    async getpokemonbyId(id) {
        const pokemonbyId = await this.repository.findOne({ id });
        return pokemonbyId;
    }
};
PokemonService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_2.InjectRepository(pokemon_entity_1.PokemonEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], PokemonService);
exports.PokemonService = PokemonService;
//# sourceMappingURL=pokemon.service.js.map
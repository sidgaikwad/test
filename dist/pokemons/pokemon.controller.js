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
exports.PokemonController = void 0;
const common_1 = require("@nestjs/common");
const crud_1 = require("@nestjsx/crud");
const pokemon_entity_1 = require("./pokemon.entity");
const swagger_1 = require("@nestjs/swagger");
const pokemon_service_1 = require("./pokemon.service");
let PokemonController = class PokemonController {
    constructor(service) {
        this.service = service;
    }
    async getCount(query, res) {
        const count = await this.service.getCount(query);
        return res.status(common_1.HttpStatus.OK).json(count);
    }
    async getpokemon(res) {
        const pokemon = await this.service.getpokemon();
        return res.status(common_1.HttpStatus.OK).json(pokemon);
    }
    async getpokemonId(id, res) {
        const pokemon = await this.service.getpokemonbyId(id);
        return res.status(common_1.HttpStatus.OK).json(pokemon);
    }
};
__decorate([
    common_1.Get('count'),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PokemonController.prototype, "getCount", null);
__decorate([
    common_1.Get('pokemon'),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PokemonController.prototype, "getpokemon", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id', common_1.ParseIntPipe)), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PokemonController.prototype, "getpokemonId", null);
PokemonController = __decorate([
    crud_1.Crud({
        model: {
            type: pokemon_entity_1.PokemonEntity,
        }, query: {
            join: {
                admin: {
                    eager: true
                }
            }
        }
    }),
    swagger_1.ApiTags('pokemon'),
    common_1.Controller('pokemon'),
    __metadata("design:paramtypes", [pokemon_service_1.PokemonService])
], PokemonController);
exports.PokemonController = PokemonController;
//# sourceMappingURL=pokemon.controller.js.map
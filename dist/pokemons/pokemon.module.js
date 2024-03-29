"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonModule = void 0;
const common_1 = require("@nestjs/common");
const pokemon_controller_1 = require("./pokemon.controller");
const pokemon_service_1 = require("./pokemon.service");
const typeorm_1 = require("@nestjs/typeorm");
const pokemon_entity_1 = require("./pokemon.entity");
const jwt_1 = require("@nestjs/jwt");
const common_module_1 = require("../common/common.module");
const constants_1 = require("../constants");
let PokemonModule = class PokemonModule {
};
PokemonModule = __decorate([
    common_1.Module({
        controllers: [pokemon_controller_1.PokemonController],
        providers: [
            pokemon_service_1.PokemonService,
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([pokemon_entity_1.PokemonEntity]),
            jwt_1.JwtModule.register(constants_1.JWT_MODULE_OPTIONS),
            common_module_1.CommonModule,
            common_1.HttpModule,
        ],
        exports: [
            typeorm_1.TypeOrmModule,
            pokemon_service_1.PokemonService,
        ],
    })
], PokemonModule);
exports.PokemonModule = PokemonModule;
//# sourceMappingURL=pokemon.module.js.map
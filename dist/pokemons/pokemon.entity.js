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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
const admins_entity_1 = require("../admins/admins.entity");
const typeorm_1 = require("typeorm");
let PokemonEntity = class PokemonEntity {
};
__decorate([
    swagger_1.ApiProperty({ nullable: false, uniqueItems: true }),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PokemonEntity.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false }),
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], PokemonEntity.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false }),
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], PokemonEntity.prototype, "type", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false }),
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", Number)
], PokemonEntity.prototype, "level", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false, }),
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", Number)
], PokemonEntity.prototype, "adminsId", void 0);
__decorate([
    swagger_1.ApiProperty({ type: () => admins_entity_1.Admin }),
    typeorm_1.ManyToOne(type => admins_entity_1.Admin, { onDelete: 'CASCADE' }),
    __metadata("design:type", admins_entity_1.Admin)
], PokemonEntity.prototype, "admins", void 0);
PokemonEntity = __decorate([
    typeorm_1.Entity({ name: 'pokemon' })
], PokemonEntity);
exports.PokemonEntity = PokemonEntity;
//# sourceMappingURL=pokemon.entity.js.map
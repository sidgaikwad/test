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
exports.Units = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let Units = class Units {
};
__decorate([
    swagger_1.ApiProperty({ nullable: false, uniqueItems: true }),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Units.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ default: true, nullable: false }),
    typeorm_1.Column({ default: true, nullable: false }),
    __metadata("design:type", Boolean)
], Units.prototype, "enabled", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false }),
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Units.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false }),
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", Number)
], Units.prototype, "multiplier", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false }),
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Units.prototype, "finalunits", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false }),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", String)
], Units.prototype, "createdTimestamp", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Units.prototype, "createdBy", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Units.prototype, "updatedBy", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false }),
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", String)
], Units.prototype, "updatedTimestamp", void 0);
Units = __decorate([
    typeorm_1.Entity({ name: 'units' })
], Units);
exports.Units = Units;
//# sourceMappingURL=units.entity.js.map
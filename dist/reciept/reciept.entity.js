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
exports.Reciept = void 0;
const swagger_1 = require("@nestjs/swagger");
const categories_entity_1 = require("../categories/categories.entity");
const sales_entity_1 = require("../sales/sales.entity");
const tendor_entity_1 = require("../tendor/tendor.entity");
const typeorm_1 = require("typeorm");
let Reciept = class Reciept {
};
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Reciept.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ default: true, nullable: false }),
    typeorm_1.Column({ default: true, nullable: false }),
    __metadata("design:type", Boolean)
], Reciept.prototype, "enabled", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true, }),
    typeorm_1.Column({ type: 'float', nullable: true }),
    __metadata("design:type", Number)
], Reciept.prototype, "amount", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false, }),
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Reciept.prototype, "date", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true, }),
    typeorm_1.Column({ type: 'float', nullable: true }),
    __metadata("design:type", Number)
], Reciept.prototype, "deductionAmount", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false, }),
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Reciept.prototype, "deductionType", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true, }),
    typeorm_1.Column({ type: 'float', nullable: true }),
    __metadata("design:type", Number)
], Reciept.prototype, "securityDeposit", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false, }),
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Reciept.prototype, "description", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false, }),
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", Number)
], Reciept.prototype, "tendorId", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false, }),
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", Number)
], Reciept.prototype, "salesId", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false }),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", String)
], Reciept.prototype, "createdTimestamp", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Reciept.prototype, "createdBy", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Reciept.prototype, "updatedBy", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false }),
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", String)
], Reciept.prototype, "updatedTimestamp", void 0);
__decorate([
    swagger_1.ApiProperty({ type: () => tendor_entity_1.Tendor }),
    typeorm_1.ManyToOne(type => tendor_entity_1.Tendor),
    __metadata("design:type", tendor_entity_1.Tendor)
], Reciept.prototype, "tendor", void 0);
__decorate([
    swagger_1.ApiProperty({ type: () => sales_entity_1.Sales }),
    typeorm_1.ManyToOne(type => sales_entity_1.Sales),
    __metadata("design:type", sales_entity_1.Sales)
], Reciept.prototype, "sales", void 0);
Reciept = __decorate([
    typeorm_1.Entity({ name: 'reciept' })
], Reciept);
exports.Reciept = Reciept;
//# sourceMappingURL=reciept.entity.js.map
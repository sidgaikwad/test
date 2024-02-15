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
exports.Contractor = void 0;
const swagger_1 = require("@nestjs/swagger");
const categories_entity_1 = require("../categories/categories.entity");
const tendor_entity_1 = require("../tendor/tendor.entity");
const typeorm_1 = require("typeorm");
let Contractor = class Contractor {
};
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Contractor.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ default: true, nullable: false }),
    typeorm_1.Column({ default: true, nullable: false }),
    __metadata("design:type", Boolean)
], Contractor.prototype, "enabled", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false, }),
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Contractor.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true, }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Contractor.prototype, "tendorId", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false, }),
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Contractor.prototype, "contactNum", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Contractor.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Contractor.prototype, "gstNo", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Contractor.prototype, "panCardNo", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Contractor.prototype, "add", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Contractor.prototype, "businessName", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true, default: false }),
    typeorm_1.Column({ nullable: true, default: false }),
    __metadata("design:type", Boolean)
], Contractor.prototype, "isDeleted", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false }),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", String)
], Contractor.prototype, "createdTimestamp", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Contractor.prototype, "createdBy", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Contractor.prototype, "updatedBy", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false }),
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", String)
], Contractor.prototype, "updatedTimestamp", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Contractor.prototype, "bankName", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Contractor.prototype, "accountNo", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Contractor.prototype, "ifsc", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Contractor.prototype, "branchName", void 0);
__decorate([
    swagger_1.ApiProperty({ type: () => tendor_entity_1.Tendor }),
    typeorm_1.ManyToOne(type => tendor_entity_1.Tendor),
    __metadata("design:type", tendor_entity_1.Tendor)
], Contractor.prototype, "tendor", void 0);
Contractor = __decorate([
    typeorm_1.Entity({ name: 'contractor' })
], Contractor);
exports.Contractor = Contractor;
//# sourceMappingURL=contractor.entity.js.map
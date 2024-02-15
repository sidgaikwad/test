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
exports.ContractorSale = void 0;
const swagger_1 = require("@nestjs/swagger");
const contractor_gst_entity_1 = require("../contractor-gst/contractor-gst.entity");
const tendor_entity_1 = require("../tendor/tendor.entity");
const typeorm_1 = require("typeorm");
let ContractorSale = class ContractorSale {
};
__decorate([
    swagger_1.ApiProperty({ nullable: false, uniqueItems: true }),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ContractorSale.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ default: true, nullable: false }),
    typeorm_1.Column({ default: true, nullable: false }),
    __metadata("design:type", Boolean)
], ContractorSale.prototype, "enabled", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true, }),
    typeorm_1.Column({ type: 'float4', nullable: true }),
    __metadata("design:type", Number)
], ContractorSale.prototype, "base", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true, }),
    typeorm_1.Column({ type: 'float4', nullable: true }),
    __metadata("design:type", Number)
], ContractorSale.prototype, "cgst", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true, }),
    typeorm_1.Column({ type: 'float4', nullable: true }),
    __metadata("design:type", Number)
], ContractorSale.prototype, "sgst", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true, }),
    typeorm_1.Column({ type: 'float4', nullable: true }),
    __metadata("design:type", Number)
], ContractorSale.prototype, "igst", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true, }),
    typeorm_1.Column({ type: 'float4', nullable: true }),
    __metadata("design:type", Number)
], ContractorSale.prototype, "gross", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false, }),
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], ContractorSale.prototype, "description", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false, }),
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", Number)
], ContractorSale.prototype, "tendorId", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], ContractorSale.prototype, "billNumber", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false, }),
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], ContractorSale.prototype, "date", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], ContractorSale.prototype, "contractorGstId", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true, type: 'float' }),
    __metadata("design:type", Number)
], ContractorSale.prototype, "discount", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], ContractorSale.prototype, "createdBy", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false }),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", String)
], ContractorSale.prototype, "createdTimestamp", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], ContractorSale.prototype, "updatedBy", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", String)
], ContractorSale.prototype, "updatedTimestamp", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.ManyToOne(type => contractor_gst_entity_1.ContractorGst, { onDelete: 'CASCADE' }),
    __metadata("design:type", contractor_gst_entity_1.ContractorGst)
], ContractorSale.prototype, "contractorGst", void 0);
__decorate([
    swagger_1.ApiProperty({ type: () => tendor_entity_1.Tendor }),
    typeorm_1.ManyToOne(type => tendor_entity_1.Tendor, { onDelete: 'CASCADE' }),
    __metadata("design:type", tendor_entity_1.Tendor)
], ContractorSale.prototype, "tendor", void 0);
ContractorSale = __decorate([
    typeorm_1.Entity({ name: 'contractor-gst-sale' })
], ContractorSale);
exports.ContractorSale = ContractorSale;
//# sourceMappingURL=contractor-sale.entity.js.map
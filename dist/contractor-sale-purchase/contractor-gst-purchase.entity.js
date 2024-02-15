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
exports.ContractorGstPurchase = void 0;
const swagger_1 = require("@nestjs/swagger");
const contractor_gst_entity_1 = require("../contractor-gst/contractor-gst.entity");
const tendor_entity_1 = require("../tendor/tendor.entity");
const trasaction_entity_1 = require("../transaction/trasaction.entity");
const typeorm_1 = require("typeorm");
let ContractorGstPurchase = class ContractorGstPurchase {
};
__decorate([
    swagger_1.ApiProperty({ nullable: false, uniqueItems: true }),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ContractorGstPurchase.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ default: true, nullable: false }),
    typeorm_1.Column({ default: true, nullable: false }),
    __metadata("design:type", Boolean)
], ContractorGstPurchase.prototype, "enabled", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true, }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], ContractorGstPurchase.prototype, "date", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true, }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], ContractorGstPurchase.prototype, "description", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true, }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], ContractorGstPurchase.prototype, "amount", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true, }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], ContractorGstPurchase.prototype, "tendorId", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], ContractorGstPurchase.prototype, "contractorGstId", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true, type: 'float' }),
    __metadata("design:type", Number)
], ContractorGstPurchase.prototype, "gstPercent", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true, type: 'float' }),
    __metadata("design:type", Number)
], ContractorGstPurchase.prototype, "itcAmount", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true, }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], ContractorGstPurchase.prototype, "transactionId", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true, }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Boolean)
], ContractorGstPurchase.prototype, "isVerified", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], ContractorGstPurchase.prototype, "createdBy", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false }),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", String)
], ContractorGstPurchase.prototype, "createdTimestamp", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], ContractorGstPurchase.prototype, "updatedBy", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", String)
], ContractorGstPurchase.prototype, "updatedTimestamp", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.ManyToOne(type => contractor_gst_entity_1.ContractorGst, { onDelete: 'CASCADE' }),
    __metadata("design:type", contractor_gst_entity_1.ContractorGst)
], ContractorGstPurchase.prototype, "contractorGst", void 0);
__decorate([
    swagger_1.ApiProperty({ type: () => tendor_entity_1.Tendor }),
    typeorm_1.ManyToOne(type => tendor_entity_1.Tendor, { onDelete: 'CASCADE' }),
    __metadata("design:type", tendor_entity_1.Tendor)
], ContractorGstPurchase.prototype, "tendor", void 0);
__decorate([
    swagger_1.ApiProperty({ type: () => trasaction_entity_1.Transaction }),
    typeorm_1.ManyToOne(type => trasaction_entity_1.Transaction, { onDelete: 'CASCADE' }),
    __metadata("design:type", trasaction_entity_1.Transaction)
], ContractorGstPurchase.prototype, "transaction", void 0);
ContractorGstPurchase = __decorate([
    typeorm_1.Entity({ name: 'contractor-gst-purchase' })
], ContractorGstPurchase);
exports.ContractorGstPurchase = ContractorGstPurchase;
//# sourceMappingURL=contractor-gst-purchase.entity.js.map
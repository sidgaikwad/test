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
exports.PaymentCertificate = void 0;
const swagger_1 = require("@nestjs/swagger");
const payment_certificate_master_entity_1 = require("../payment-certificate-master/payment-certificate-master.entity");
const typeorm_1 = require("typeorm");
let PaymentCertificate = class PaymentCertificate {
};
__decorate([
    swagger_1.ApiProperty({ nullable: false, uniqueItems: true }),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PaymentCertificate.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ default: true, nullable: false }),
    typeorm_1.Column({ default: true, nullable: false }),
    __metadata("design:type", Boolean)
], PaymentCertificate.prototype, "enabled", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true, }),
    typeorm_1.Column({ type: 'float4', nullable: true }),
    __metadata("design:type", Number)
], PaymentCertificate.prototype, "base", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true, }),
    typeorm_1.Column({ type: 'float4', nullable: true }),
    __metadata("design:type", Number)
], PaymentCertificate.prototype, "cgst", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true, }),
    typeorm_1.Column({ type: 'float4', nullable: true }),
    __metadata("design:type", Number)
], PaymentCertificate.prototype, "sgst", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true, }),
    typeorm_1.Column({ type: 'float4', nullable: true }),
    __metadata("design:type", Number)
], PaymentCertificate.prototype, "igst", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true, }),
    typeorm_1.Column({ type: 'float4', nullable: true }),
    __metadata("design:type", Number)
], PaymentCertificate.prototype, "gross", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false, }),
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], PaymentCertificate.prototype, "description", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false, }),
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], PaymentCertificate.prototype, "date", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true, }),
    typeorm_1.Column({ type: 'float4', nullable: true }),
    __metadata("design:type", Number)
], PaymentCertificate.prototype, "gstAmt", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true, }),
    typeorm_1.Column({ type: 'float4', nullable: true }),
    __metadata("design:type", Number)
], PaymentCertificate.prototype, "deductionAmt", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true, }),
    typeorm_1.Column({ type: 'float4', nullable: true }),
    __metadata("design:type", Number)
], PaymentCertificate.prototype, "netAmountInAccount", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true, }),
    typeorm_1.Column({ type: 'float4', nullable: true }),
    __metadata("design:type", Number)
], PaymentCertificate.prototype, "comissionOnGrossAmt", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true, }),
    typeorm_1.Column({ type: 'float4', nullable: true }),
    __metadata("design:type", Number)
], PaymentCertificate.prototype, "otherAmt", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true, }),
    typeorm_1.Column({ type: 'float4', nullable: true }),
    __metadata("design:type", Number)
], PaymentCertificate.prototype, "payableAmt", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true, }),
    typeorm_1.Column({ type: 'float4', nullable: true }),
    __metadata("design:type", Number)
], PaymentCertificate.prototype, "payableAmtToContractor", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true, }),
    typeorm_1.Column({ type: 'float4', nullable: true }),
    __metadata("design:type", Number)
], PaymentCertificate.prototype, "payableGross", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true, }),
    typeorm_1.Column({ type: 'float4', nullable: true }),
    __metadata("design:type", Number)
], PaymentCertificate.prototype, "payableBase", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true, }),
    typeorm_1.Column({ type: 'float4', nullable: true }),
    __metadata("design:type", Number)
], PaymentCertificate.prototype, "payableGst", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true, }),
    typeorm_1.Column({ type: 'float4', nullable: true }),
    __metadata("design:type", Number)
], PaymentCertificate.prototype, "percentcomissionOnGrossAmt", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true, }),
    typeorm_1.Column({ type: 'float4', nullable: true }),
    __metadata("design:type", Number)
], PaymentCertificate.prototype, "paymentCertificateMasterId", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], PaymentCertificate.prototype, "createdBy", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false }),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", String)
], PaymentCertificate.prototype, "createdTimestamp", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], PaymentCertificate.prototype, "updatedBy", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", String)
], PaymentCertificate.prototype, "updatedTimestamp", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.ManyToOne(type => payment_certificate_master_entity_1.PaymentCertificateMaster, { onDelete: 'CASCADE' }),
    __metadata("design:type", payment_certificate_master_entity_1.PaymentCertificateMaster)
], PaymentCertificate.prototype, "paymentCertificateMaster", void 0);
PaymentCertificate = __decorate([
    typeorm_1.Entity({ name: 'payment-certificate' })
], PaymentCertificate);
exports.PaymentCertificate = PaymentCertificate;
//# sourceMappingURL=payment-certificate.entity.js.map
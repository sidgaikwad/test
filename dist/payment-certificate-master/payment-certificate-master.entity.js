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
exports.PaymentCertificateMaster = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let PaymentCertificateMaster = class PaymentCertificateMaster {
};
__decorate([
    swagger_1.ApiProperty({ nullable: false, uniqueItems: true }),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], PaymentCertificateMaster.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ default: true, nullable: false }),
    typeorm_1.Column({ default: true, nullable: false }),
    __metadata("design:type", Boolean)
], PaymentCertificateMaster.prototype, "enabled", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], PaymentCertificateMaster.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], PaymentCertificateMaster.prototype, "createdBy", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false }),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", String)
], PaymentCertificateMaster.prototype, "createdTimestamp", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], PaymentCertificateMaster.prototype, "updatedBy", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", String)
], PaymentCertificateMaster.prototype, "updatedTimestamp", void 0);
PaymentCertificateMaster = __decorate([
    typeorm_1.Entity({ name: 'payment-certificate-master' })
], PaymentCertificateMaster);
exports.PaymentCertificateMaster = PaymentCertificateMaster;
//# sourceMappingURL=payment-certificate-master.entity.js.map
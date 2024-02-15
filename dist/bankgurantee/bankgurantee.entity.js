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
exports.BankGurantee = void 0;
const swagger_1 = require("@nestjs/swagger");
const contractor_entity_1 = require("../contractor/contractor.entity");
const department_master_entity_1 = require("../department-master/department-master.entity");
const tendor_entity_1 = require("../tendor/tendor.entity");
const typeorm_1 = require("typeorm");
let BankGurantee = class BankGurantee {
};
__decorate([
    swagger_1.ApiProperty({ nullable: false, uniqueItems: true }),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], BankGurantee.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ default: true, nullable: false }),
    typeorm_1.Column({ default: true, nullable: false }),
    __metadata("design:type", Boolean)
], BankGurantee.prototype, "enabled", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false }),
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], BankGurantee.prototype, "title", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], BankGurantee.prototype, "tendorId", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], BankGurantee.prototype, "description", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true, default: false }),
    typeorm_1.Column({ nullable: true, default: false }),
    __metadata("design:type", Boolean)
], BankGurantee.prototype, "isBgReleased", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], BankGurantee.prototype, "bgReleaseAmount", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], BankGurantee.prototype, "bgReleaseDate", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], BankGurantee.prototype, "fdrDeposit", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], BankGurantee.prototype, "fdrNo", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], BankGurantee.prototype, "fdrDate", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], BankGurantee.prototype, "bankGuranteeExpiry", void 0);
__decorate([
    swagger_1.ApiProperty({ type: "float", nullable: true }),
    typeorm_1.Column({ type: "float", nullable: true }),
    __metadata("design:type", Number)
], BankGurantee.prototype, "amount", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], BankGurantee.prototype, "createdBy", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false }),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", String)
], BankGurantee.prototype, "createdTimestamp", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], BankGurantee.prototype, "updatedBy", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false }),
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", String)
], BankGurantee.prototype, "updatedTimestamp", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true, default: false }),
    __metadata("design:type", Boolean)
], BankGurantee.prototype, "isFdr", void 0);
__decorate([
    typeorm_1.ManyToOne(() => tendor_entity_1.Tendor, { eager: true }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", tendor_entity_1.Tendor)
], BankGurantee.prototype, "tendor", void 0);
BankGurantee = __decorate([
    typeorm_1.Entity({ name: 'bankGurantee' })
], BankGurantee);
exports.BankGurantee = BankGurantee;
//# sourceMappingURL=bankgurantee.entity.js.map
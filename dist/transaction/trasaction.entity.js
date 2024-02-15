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
exports.Transaction = void 0;
const swagger_1 = require("@nestjs/swagger");
const admins_entity_1 = require("../admins/admins.entity");
const contractor_entity_1 = require("../contractor/contractor.entity");
const document_type_master_entity_1 = require("../document-type-master/document-type-master.entity");
const tendor_entity_1 = require("../tendor/tendor.entity");
const typeorm_1 = require("typeorm");
let Transaction = class Transaction {
};
__decorate([
    swagger_1.ApiProperty({ nullable: false, uniqueItems: true }),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Transaction.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ default: true, nullable: false }),
    typeorm_1.Column({ default: true, nullable: false }),
    __metadata("design:type", Boolean)
], Transaction.prototype, "enabled", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Transaction.prototype, "contractorId", void 0);
__decorate([
    swagger_1.ApiProperty({ type: "float", nullable: true }),
    typeorm_1.Column({ type: "float", nullable: true }),
    __metadata("design:type", Number)
], Transaction.prototype, "amount", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false }),
    typeorm_1.CreateDateColumn({ nullable: false }),
    __metadata("design:type", String)
], Transaction.prototype, "date", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Transaction.prototype, "desc", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Transaction.prototype, "transactionType", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Transaction.prototype, "tendorId", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true, default: false }),
    __metadata("design:type", Boolean)
], Transaction.prototype, "isVerified", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true, default: false }),
    __metadata("design:type", Boolean)
], Transaction.prototype, "isAddedToConGSt", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Transaction.prototype, "isVerifiedById", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true, default: false }),
    __metadata("design:type", Boolean)
], Transaction.prototype, "isAddedToBankStatement", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false }),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", String)
], Transaction.prototype, "createdTimestamp", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Transaction.prototype, "createdBy", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Transaction.prototype, "updatedBy", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false }),
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", String)
], Transaction.prototype, "updatedTimestamp", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.ManyToOne(() => contractor_entity_1.Contractor),
    __metadata("design:type", contractor_entity_1.Contractor)
], Transaction.prototype, "contractor", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.ManyToOne(() => tendor_entity_1.Tendor),
    __metadata("design:type", tendor_entity_1.Tendor)
], Transaction.prototype, "tendor", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.ManyToOne(() => admins_entity_1.Admin),
    __metadata("design:type", admins_entity_1.Admin)
], Transaction.prototype, "isVerifiedBy", void 0);
Transaction = __decorate([
    typeorm_1.Entity({ name: 'transaction' })
], Transaction);
exports.Transaction = Transaction;
//# sourceMappingURL=trasaction.entity.js.map
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
exports.Documents = void 0;
const swagger_1 = require("@nestjs/swagger");
const document_type_master_entity_1 = require("../document-type-master/document-type-master.entity");
const tendor_entity_1 = require("../tendor/tendor.entity");
const typeorm_1 = require("typeorm");
let Documents = class Documents {
};
__decorate([
    swagger_1.ApiProperty({ nullable: false, uniqueItems: true }),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Documents.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ default: true, nullable: false }),
    typeorm_1.Column({ default: true, nullable: false }),
    __metadata("design:type", Boolean)
], Documents.prototype, "enabled", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Documents.prototype, "title", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Documents.prototype, "description", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Documents.prototype, "image", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Documents.prototype, "document", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Documents.prototype, "tendorId", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Documents.prototype, "documentMasterId", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false }),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", String)
], Documents.prototype, "createdTimestamp", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Documents.prototype, "createdBy", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Documents.prototype, "updatedBy", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false }),
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", String)
], Documents.prototype, "updatedTimestamp", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.ManyToOne(() => tendor_entity_1.Tendor),
    __metadata("design:type", tendor_entity_1.Tendor)
], Documents.prototype, "tendor", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.ManyToOne(() => document_type_master_entity_1.DocumentMaster),
    __metadata("design:type", document_type_master_entity_1.DocumentMaster)
], Documents.prototype, "documentMaster", void 0);
Documents = __decorate([
    typeorm_1.Entity({ name: 'documents' })
], Documents);
exports.Documents = Documents;
//# sourceMappingURL=document.entity.js.map
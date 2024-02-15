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
exports.Admin = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
const encryption_transformer_1 = require("../entities/encryption.transformer");
const adminsRole_entity_1 = require("../admins-roles/adminsRole.entity");
let Admin = class Admin {
};
__decorate([
    swagger_1.ApiProperty({ nullable: false, uniqueItems: true }),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Admin.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false, default: true }),
    typeorm_1.Column({ nullable: false, default: true }),
    __metadata("design:type", Boolean)
], Admin.prototype, "enabled", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false }),
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Admin.prototype, "fullName", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Admin.prototype, "contactNumber", void 0);
__decorate([
    swagger_1.ApiProperty({ maxLength: 200, uniqueItems: true, nullable: true }),
    typeorm_1.Column({ length: 200, unique: true, nullable: true }),
    __metadata("design:type", String)
], Admin.prototype, "email", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false }),
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Admin.prototype, "password", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Admin.prototype, "avatar", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Admin.prototype, "gender", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Admin.prototype, "adminsRoleId", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Admin.prototype, "flastLogin", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Admin.prototype, "createdBy", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false }),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", String)
], Admin.prototype, "createdTimestamp", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Admin.prototype, "accessToken", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Admin.prototype, "updatedBy", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false }),
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", String)
], Admin.prototype, "updatedTimestamp", void 0);
__decorate([
    swagger_1.ApiProperty({ enum: ['superadmin', 'admin'] }),
    typeorm_1.ManyToOne(type => adminsRole_entity_1.AdminsRole),
    __metadata("design:type", adminsRole_entity_1.AdminsRole)
], Admin.prototype, "adminsRole", void 0);
Admin = __decorate([
    typeorm_1.Entity({ name: 'admins' })
], Admin);
exports.Admin = Admin;
//# sourceMappingURL=admins.entity.js.map
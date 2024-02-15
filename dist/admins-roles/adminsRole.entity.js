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
exports.AdminsRole = void 0;
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let AdminsRole = class AdminsRole {
};
__decorate([
    swagger_1.ApiProperty({ nullable: false, uniqueItems: true }),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], AdminsRole.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ default: true, nullable: false }),
    typeorm_1.Column({ default: true, nullable: false }),
    __metadata("design:type", Boolean)
], AdminsRole.prototype, "enabled", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column({ length: 25, unique: true, nullable: false }),
    __metadata("design:type", String)
], AdminsRole.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], AdminsRole.prototype, "createdBy", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", String)
], AdminsRole.prototype, "createdTimestamp", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], AdminsRole.prototype, "updatedBy", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", String)
], AdminsRole.prototype, "updatedTimestamp", void 0);
AdminsRole = __decorate([
    typeorm_1.Entity({ name: 'admins_roles' })
], AdminsRole);
exports.AdminsRole = AdminsRole;
//# sourceMappingURL=adminsRole.entity.js.map
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
exports.Forgot = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let Forgot = class Forgot {
};
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Forgot.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column({ default: true }),
    __metadata("design:type", Boolean)
], Forgot.prototype, "enabled", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Forgot.prototype, "userId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column({ nullable: false, default: false }),
    __metadata("design:type", Boolean)
], Forgot.prototype, "consumed", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Forgot.prototype, "sessionId", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", String)
], Forgot.prototype, "createdTimestamp", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Forgot.prototype, "createdBy", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Forgot.prototype, "updatedBy", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", String)
], Forgot.prototype, "updatedTimestamp", void 0);
Forgot = __decorate([
    typeorm_1.Entity({ name: 'forgot' })
], Forgot);
exports.Forgot = Forgot;
//# sourceMappingURL=forgot.entity.js.map
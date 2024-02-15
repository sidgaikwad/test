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
exports.Categories = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let Categories = class Categories {
};
__decorate([
    swagger_1.ApiProperty({ nullable: false, uniqueItems: true }),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Categories.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty({ default: true, nullable: false }),
    typeorm_1.Column({ default: true, nullable: false }),
    __metadata("design:type", Boolean)
], Categories.prototype, "enabled", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false, uniqueItems: true }),
    typeorm_1.Column({ nullable: false, unique: true }),
    __metadata("design:type", String)
], Categories.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true, default: false }),
    typeorm_1.Column({ nullable: true, default: false }),
    __metadata("design:type", Boolean)
], Categories.prototype, "isDeleted", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false }),
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Categories.prototype, "image", void 0);
__decorate([
    swagger_1.ApiProperty({ default: false, nullable: false }),
    typeorm_1.Column({ default: false, nullable: false }),
    __metadata("design:type", Boolean)
], Categories.prototype, "feature", void 0);
__decorate([
    swagger_1.ApiProperty({ default: false, nullable: false }),
    typeorm_1.Column({ default: false, nullable: false }),
    __metadata("design:type", Boolean)
], Categories.prototype, "isSubCategory", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false }),
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", Number)
], Categories.prototype, "priority", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false }),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", String)
], Categories.prototype, "createdTimestamp", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Categories.prototype, "createdBy", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: true }),
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", Number)
], Categories.prototype, "updatedBy", void 0);
__decorate([
    swagger_1.ApiProperty({ nullable: false }),
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", String)
], Categories.prototype, "updatedTimestamp", void 0);
Categories = __decorate([
    typeorm_1.Entity({ name: 'categories' })
], Categories);
exports.Categories = Categories;
//# sourceMappingURL=categories.entity.js.map
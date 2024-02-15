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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannersController = void 0;
const common_1 = require("@nestjs/common");
const banners_entity_1 = require("./banners.entity");
const crud_1 = require("@nestjsx/crud");
const banners_service_1 = require("./banners.service");
const public_decorator_1 = require("../decorator/public.decorator");
let BannersController = class BannersController {
    constructor(service) {
        this.service = service;
    }
    async updateOrder(req, res) {
        const updated = await this.service.updatePriority(req);
        if (updated) {
            return res.status(common_1.HttpStatus.OK).json(updated);
        }
        else {
            return res.status(common_1.HttpStatus.BAD_REQUEST).json('Error While Updating');
        }
    }
    async getCount(query, res) {
        const count = await this.service.getCount(query);
        return res.status(common_1.HttpStatus.OK).json(count);
    }
};
__decorate([
    common_1.Post('order'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BannersController.prototype, "updateOrder", null);
__decorate([
    common_1.Get('count'),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BannersController.prototype, "getCount", null);
BannersController = __decorate([
    crud_1.Crud({
        model: {
            type: banners_entity_1.Banner,
        },
    }),
    common_1.Controller('banners'),
    __metadata("design:paramtypes", [banners_service_1.BannersService])
], BannersController);
exports.BannersController = BannersController;
//# sourceMappingURL=banners.controller.js.map
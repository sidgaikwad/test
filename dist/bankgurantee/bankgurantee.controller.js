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
exports.BankGuranteesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const crud_1 = require("@nestjsx/crud");
const public_decorator_1 = require("../decorator/public.decorator");
const bankgurantee_entity_1 = require("./bankgurantee.entity");
const bankgurantee_service_1 = require("./bankgurantee.service");
let BankGuranteesController = class BankGuranteesController {
    constructor(service) {
        this.service = service;
    }
    async getCount(query, res) {
        const count = await this.service.getCount(query);
        return res.status(common_1.HttpStatus.OK).json(count);
    }
    async updateValue(query, res) {
        const count = await this.service.updateValue();
        return res.status(common_1.HttpStatus.OK).json(count);
    }
    async analytics(req, res) {
        try {
            const data = await this.service.analytics(req.body);
            return res.status(common_1.HttpStatus.OK).json(data);
        }
        catch (error) {
            console.log(error);
        }
    }
};
__decorate([
    common_1.Get('count'),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BankGuranteesController.prototype, "getCount", null);
__decorate([
    common_1.Get('update-value'),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BankGuranteesController.prototype, "updateValue", null);
__decorate([
    common_1.Post('analytics'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BankGuranteesController.prototype, "analytics", null);
BankGuranteesController = __decorate([
    crud_1.Crud({
        model: {
            type: bankgurantee_entity_1.BankGurantee,
        },
        query: {
            join: {
                tendor: {
                    eager: true,
                },
            }
        }
    }),
    swagger_1.ApiTags('bank-gurantee'),
    common_1.Controller('bank-gurantee'),
    __metadata("design:paramtypes", [bankgurantee_service_1.BankGuranteesService])
], BankGuranteesController);
exports.BankGuranteesController = BankGuranteesController;
//# sourceMappingURL=bankgurantee.controller.js.map
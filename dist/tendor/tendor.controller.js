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
exports.TendorsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const crud_1 = require("@nestjsx/crud");
const public_decorator_1 = require("../decorator/public.decorator");
const tendor_entity_1 = require("./tendor.entity");
const tendor_service_1 = require("./tendor.service");
let TendorsController = class TendorsController {
    constructor(service) {
        this.service = service;
    }
    async getCount(query, res) {
        const count = await this.service.getCount(query);
        return res.status(common_1.HttpStatus.OK).json(count);
    }
    async getEmd(query, res) {
        const em = await this.service.getEmd(query);
        return res.status(common_1.HttpStatus.OK).json(em);
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
], TendorsController.prototype, "getCount", null);
__decorate([
    common_1.Get('earnestmoney'),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TendorsController.prototype, "getEmd", null);
__decorate([
    common_1.Post('analytics'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], TendorsController.prototype, "analytics", null);
TendorsController = __decorate([
    crud_1.Crud({
        model: {
            type: tendor_entity_1.Tendor,
        },
        query: {
            join: {
                contractor: {
                    eager: true,
                },
                bankg: {
                    eager: true,
                },
                department: {
                    eager: true,
                },
            },
        },
    }),
    swagger_1.ApiTags('tendor'),
    common_1.Controller('tendor'),
    __metadata("design:paramtypes", [tendor_service_1.TendorsService])
], TendorsController);
exports.TendorsController = TendorsController;
//# sourceMappingURL=tendor.controller.js.map
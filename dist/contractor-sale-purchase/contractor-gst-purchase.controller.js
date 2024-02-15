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
exports.ContractorGstPurchasesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const crud_1 = require("@nestjsx/crud");
const contractor_gst_purchase_entity_1 = require("./contractor-gst-purchase.entity");
const contractor_gst_purchase_service_1 = require("./contractor-gst-purchase.service");
let ContractorGstPurchasesController = class ContractorGstPurchasesController {
    constructor(service) {
        this.service = service;
    }
    async getCount(query, res) {
        const count = await this.service.getCount(query);
        return res.status(common_1.HttpStatus.OK).json(count);
    }
};
__decorate([
    common_1.Get('count'),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ContractorGstPurchasesController.prototype, "getCount", null);
ContractorGstPurchasesController = __decorate([
    crud_1.Crud({
        model: {
            type: contractor_gst_purchase_entity_1.ContractorGstPurchase,
        },
        query: {
            join: {
                contractorGst: {
                    eager: true
                },
                tendor: {
                    eager: true
                },
                transaction: {
                    eager: true
                }
            }
        }
    }),
    swagger_1.ApiTags('contractor-gst-purchase'),
    common_1.Controller('contractor-gst-purchase'),
    __metadata("design:paramtypes", [contractor_gst_purchase_service_1.ContractorGstPurchasesService])
], ContractorGstPurchasesController);
exports.ContractorGstPurchasesController = ContractorGstPurchasesController;
//# sourceMappingURL=contractor-gst-purchase.controller.js.map
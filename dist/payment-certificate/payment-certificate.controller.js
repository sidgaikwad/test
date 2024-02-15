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
exports.PaymentCertificatesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const crud_1 = require("@nestjsx/crud");
const payment_certificate_entity_1 = require("./payment-certificate.entity");
const payment_certificate_service_1 = require("./payment-certificate.service");
let PaymentCertificatesController = class PaymentCertificatesController {
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
], PaymentCertificatesController.prototype, "getCount", null);
PaymentCertificatesController = __decorate([
    crud_1.Crud({
        model: {
            type: payment_certificate_entity_1.PaymentCertificate,
        },
        query: {
            join: {
                paymentCertificateMaster: {
                    eager: true
                }
            }
        }
    }),
    swagger_1.ApiTags('payment-certificate'),
    common_1.Controller('payment-certificate'),
    __metadata("design:paramtypes", [payment_certificate_service_1.PaymentCertificatesService])
], PaymentCertificatesController);
exports.PaymentCertificatesController = PaymentCertificatesController;
//# sourceMappingURL=payment-certificate.controller.js.map
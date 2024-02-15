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
exports.PaymentCertificatesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const crud_typeorm_1 = require("@nestjsx/crud-typeorm");
const common_service_1 = require("../common/common.service");
const typeorm_2 = require("typeorm");
const payment_certificate_entity_1 = require("./payment-certificate.entity");
const axios = require('axios');
const otpGenerator = require('otp-generator');
let PaymentCertificatesService = class PaymentCertificatesService extends crud_typeorm_1.TypeOrmCrudService {
    constructor(PaymentCertificatesRepository) {
        super(PaymentCertificatesRepository);
        this.repository = null;
        this.repository = PaymentCertificatesRepository;
    }
    async getCount(query) {
        return await this.count();
    }
};
PaymentCertificatesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(payment_certificate_entity_1.PaymentCertificate)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PaymentCertificatesService);
exports.PaymentCertificatesService = PaymentCertificatesService;
//# sourceMappingURL=payment-certificate.service.js.map
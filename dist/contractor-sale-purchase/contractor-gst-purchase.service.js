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
exports.ContractorGstPurchasesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const crud_typeorm_1 = require("@nestjsx/crud-typeorm");
const common_service_1 = require("../common/common.service");
const typeorm_2 = require("typeorm");
const contractor_gst_purchase_entity_1 = require("./contractor-gst-purchase.entity");
const axios = require('axios');
const otpGenerator = require('otp-generator');
let ContractorGstPurchasesService = class ContractorGstPurchasesService extends crud_typeorm_1.TypeOrmCrudService {
    constructor(departmentMastersRepository) {
        super(departmentMastersRepository);
        this.repository = null;
        this.repository = departmentMastersRepository;
    }
    async getCount(query) {
        return await this.count();
    }
};
ContractorGstPurchasesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(contractor_gst_purchase_entity_1.ContractorGstPurchase)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ContractorGstPurchasesService);
exports.ContractorGstPurchasesService = ContractorGstPurchasesService;
//# sourceMappingURL=contractor-gst-purchase.service.js.map
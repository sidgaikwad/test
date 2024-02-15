"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractorSalesModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const common_module_1 = require("../common/common.module");
const common_service_1 = require("../common/common.service");
const constants_1 = require("../constants");
const contractor_sale_controller_1 = require("./contractor-sale.controller");
const contractor_sale_entity_1 = require("./contractor-sale.entity");
const contractor_sale_service_1 = require("./contractor-sale.service");
let ContractorSalesModule = class ContractorSalesModule {
};
ContractorSalesModule = __decorate([
    common_1.Module({
        controllers: [contractor_sale_controller_1.ContractorSalesController],
        providers: [
            contractor_sale_service_1.ContractorSalesService,
            common_service_1.CommonService,
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([contractor_sale_entity_1.ContractorSale]),
            jwt_1.JwtModule.register(constants_1.JWT_MODULE_OPTIONS),
            common_module_1.CommonModule,
            common_1.HttpModule,
        ],
        exports: [
            typeorm_1.TypeOrmModule,
            contractor_sale_service_1.ContractorSalesService,
        ],
    })
], ContractorSalesModule);
exports.ContractorSalesModule = ContractorSalesModule;
//# sourceMappingURL=contractor-sale.module.js.map
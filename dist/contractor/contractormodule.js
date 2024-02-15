"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractorModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const common_module_1 = require("../common/common.module");
const common_service_1 = require("../common/common.service");
const constants_1 = require("../constants");
const tendor_module_1 = require("../tendor/tendor.module");
const contractor_controller_1 = require("./contractor.controller");
const contractor_entity_1 = require("./contractor.entity");
const contractor_service_1 = require("./contractor.service");
let ContractorModule = class ContractorModule {
};
ContractorModule = __decorate([
    common_1.Module({
        controllers: [contractor_controller_1.ContractorController],
        providers: [
            contractor_service_1.ContractorService,
            common_service_1.CommonService
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([contractor_entity_1.Contractor]),
            jwt_1.JwtModule.register(constants_1.JWT_MODULE_OPTIONS),
            common_module_1.CommonModule,
            tendor_module_1.TendorsModule
        ],
        exports: [
            typeorm_1.TypeOrmModule,
            contractor_service_1.ContractorService
        ],
    })
], ContractorModule);
exports.ContractorModule = ContractorModule;
//# sourceMappingURL=contractormodule.js.map
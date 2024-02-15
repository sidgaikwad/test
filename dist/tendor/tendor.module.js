"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TendorsModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const common_module_1 = require("../common/common.module");
const common_service_1 = require("../common/common.service");
const constants_1 = require("../constants");
const contractormodule_1 = require("../contractor/contractormodule");
const tendor_controller_1 = require("./tendor.controller");
const tendor_entity_1 = require("./tendor.entity");
const tendor_service_1 = require("./tendor.service");
let TendorsModule = class TendorsModule {
};
TendorsModule = __decorate([
    common_1.Module({
        controllers: [tendor_controller_1.TendorsController],
        providers: [
            tendor_service_1.TendorsService,
            common_service_1.CommonService
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([tendor_entity_1.Tendor]),
            jwt_1.JwtModule.register(constants_1.JWT_MODULE_OPTIONS),
            common_module_1.CommonModule,
            common_1.forwardRef(() => contractormodule_1.ContractorModule)
        ],
        exports: [
            typeorm_1.TypeOrmModule,
            tendor_service_1.TendorsService
        ],
    })
], TendorsModule);
exports.TendorsModule = TendorsModule;
//# sourceMappingURL=tendor.module.js.map
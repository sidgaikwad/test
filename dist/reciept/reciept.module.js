"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecieptModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const common_module_1 = require("../common/common.module");
const common_service_1 = require("../common/common.service");
const constants_1 = require("../constants");
const tendor_module_1 = require("../tendor/tendor.module");
const reciept_controller_1 = require("./reciept.controller");
const reciept_entity_1 = require("./reciept.entity");
const reciept_service_1 = require("./reciept.service");
let RecieptModule = class RecieptModule {
};
RecieptModule = __decorate([
    common_1.Module({
        controllers: [reciept_controller_1.RecieptController],
        providers: [
            reciept_service_1.RecieptService,
            common_service_1.CommonService
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([reciept_entity_1.Reciept]),
            jwt_1.JwtModule.register(constants_1.JWT_MODULE_OPTIONS),
            common_module_1.CommonModule,
            tendor_module_1.TendorsModule
        ],
        exports: [
            typeorm_1.TypeOrmModule,
            reciept_service_1.RecieptService
        ],
    })
], RecieptModule);
exports.RecieptModule = RecieptModule;
//# sourceMappingURL=reciept.module.js.map
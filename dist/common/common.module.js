"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonModule = void 0;
const constants_1 = require("../constants");
const jwt_1 = require("@nestjs/jwt");
const common_service_1 = require("./common.service");
const common_1 = require("@nestjs/common");
const common_controller_1 = require("./common.controller");
let CommonModule = class CommonModule {
};
CommonModule = __decorate([
    common_1.Module({
        providers: [
            common_service_1.CommonService,
        ],
        imports: [
            jwt_1.JwtModule.register(constants_1.JWT_MODULE_OPTIONS),
        ],
        exports: [
            common_service_1.CommonService,
        ],
        controllers: [common_controller_1.CommonController],
    })
], CommonModule);
exports.CommonModule = CommonModule;
//# sourceMappingURL=common.module.js.map
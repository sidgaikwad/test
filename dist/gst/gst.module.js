"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GSTsModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const common_module_1 = require("../common/common.module");
const common_service_1 = require("../common/common.service");
const constants_1 = require("../constants");
const gst_controller_1 = require("./gst.controller");
const gst_entity_1 = require("./gst.entity");
const gst_service_1 = require("./gst.service");
let GSTsModule = class GSTsModule {
};
GSTsModule = __decorate([
    common_1.Module({
        controllers: [gst_controller_1.GSTsController],
        providers: [
            gst_service_1.GSTsService,
            common_service_1.CommonService
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([gst_entity_1.GST]),
            jwt_1.JwtModule.register(constants_1.JWT_MODULE_OPTIONS),
            common_module_1.CommonModule,
        ],
        exports: [
            typeorm_1.TypeOrmModule,
            gst_service_1.GSTsService
        ],
    })
], GSTsModule);
exports.GSTsModule = GSTsModule;
//# sourceMappingURL=gst.module.js.map
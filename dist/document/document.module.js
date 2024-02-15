"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const common_module_1 = require("../common/common.module");
const common_service_1 = require("../common/common.service");
const constants_1 = require("../constants");
const document_controller_1 = require("./document.controller");
const document_entity_1 = require("./document.entity");
const document_service_1 = require("./document.service");
let DocumentsModule = class DocumentsModule {
};
DocumentsModule = __decorate([
    common_1.Module({
        controllers: [document_controller_1.DocumentsController],
        providers: [
            document_service_1.DocumentsService,
            common_service_1.CommonService
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([document_entity_1.Documents]),
            jwt_1.JwtModule.register(constants_1.JWT_MODULE_OPTIONS),
            common_module_1.CommonModule,
        ],
        exports: [
            typeorm_1.TypeOrmModule,
            document_service_1.DocumentsService
        ],
    })
], DocumentsModule);
exports.DocumentsModule = DocumentsModule;
//# sourceMappingURL=document.module.js.map
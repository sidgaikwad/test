"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const admins_entity_1 = require("./admins.entity");
const admins_controller_1 = require("./admins.controller");
const admins_service_1 = require("./admins.service");
const constants_1 = require("../constants");
const jwt_1 = require("@nestjs/jwt");
const local_strategy_1 = require("../strategy/local.strategy");
const common_service_1 = require("../common/common.service");
const common_module_1 = require("../common/common.module");
const admins_roles_module_1 = require("../admins-roles/admins-roles.module");
const admins_subscriber_1 = require("./admins.subscriber");
const forgot_module_1 = require("../forgot/forgot.module");
const categories_module_1 = require("../categories/categories.module");
let AdminsModule = class AdminsModule {
};
AdminsModule = __decorate([
    common_1.Module({
        controllers: [admins_controller_1.AdminsController],
        providers: [
            admins_service_1.AdminsService,
            local_strategy_1.LocalStrategy,
            common_service_1.CommonService,
            admins_subscriber_1.AdminsSubscriber
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([admins_entity_1.Admin]),
            jwt_1.JwtModule.register(constants_1.JWT_MODULE_OPTIONS),
            common_module_1.CommonModule,
            admins_roles_module_1.AdminsRolesModule,
            forgot_module_1.ForgotModule,
            categories_module_1.CategoriesModule
        ],
        exports: [
            typeorm_1.TypeOrmModule,
            admins_service_1.AdminsService,
        ],
    })
], AdminsModule);
exports.AdminsModule = AdminsModule;
//# sourceMappingURL=admins.module.js.map
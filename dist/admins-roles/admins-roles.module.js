"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminsRolesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const adminsRole_entity_1 = require("./adminsRole.entity");
const admins_roles_controller_1 = require("./admins-roles.controller");
const admins_roles_service_1 = require("./admins-roles.service");
let AdminsRolesModule = class AdminsRolesModule {
};
AdminsRolesModule = __decorate([
    common_1.Module({
        controllers: [admins_roles_controller_1.AdminsRolesController],
        providers: [
            admins_roles_service_1.AdminsRolesService,
        ],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([adminsRole_entity_1.AdminsRole]),
        ],
        exports: [
            typeorm_1.TypeOrmModule,
            admins_roles_service_1.AdminsRolesService,
        ],
    })
], AdminsRolesModule);
exports.AdminsRolesModule = AdminsRolesModule;
//# sourceMappingURL=admins-roles.module.js.map
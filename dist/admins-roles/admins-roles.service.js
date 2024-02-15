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
exports.AdminsRolesService = void 0;
const common_1 = require("@nestjs/common");
const crud_typeorm_1 = require("@nestjsx/crud-typeorm");
const adminsRole_entity_1 = require("./adminsRole.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let AdminsRolesService = class AdminsRolesService extends crud_typeorm_1.TypeOrmCrudService {
    constructor(adminsRolesRepository) {
        super(adminsRolesRepository);
    }
};
AdminsRolesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(adminsRole_entity_1.AdminsRole)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AdminsRolesService);
exports.AdminsRolesService = AdminsRolesService;
//# sourceMappingURL=admins-roles.service.js.map
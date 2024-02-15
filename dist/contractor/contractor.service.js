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
exports.ContractorService = void 0;
const common_1 = require("@nestjs/common");
const crud_typeorm_1 = require("@nestjsx/crud-typeorm");
const contractor_entity_1 = require("./contractor.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const common_service_1 = require("../common/common.service");
let ContractorService = class ContractorService extends crud_typeorm_1.TypeOrmCrudService {
    constructor(subCategoryRepository, commonService) {
        super(subCategoryRepository);
        this.commonService = commonService;
        this.repository = null;
        this.repository = subCategoryRepository;
    }
    async getCount(query) {
        return await this.count();
    }
};
ContractorService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(contractor_entity_1.Contractor)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        common_service_1.CommonService])
], ContractorService);
exports.ContractorService = ContractorService;
//# sourceMappingURL=contractor.service.js.map
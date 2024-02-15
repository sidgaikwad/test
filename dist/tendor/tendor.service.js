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
exports.TendorsService = void 0;
const common_1 = require("@nestjs/common");
const crud_typeorm_1 = require("@nestjsx/crud-typeorm");
const tendor_entity_1 = require("./tendor.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const common_service_1 = require("../common/common.service");
let TendorsService = class TendorsService extends crud_typeorm_1.TypeOrmCrudService {
    constructor(tendorsRepository, commonService) {
        super(tendorsRepository);
        this.commonService = commonService;
        this.repository = null;
        this.repository = tendorsRepository;
    }
    async getCount(query) {
        return await this.count();
    }
    async getEmd(query) {
        let emd = await this.repository.createQueryBuilder("tendor")
            .where('tendor.status= :value', { value: query.status })
            .andWhere('tendor.isEmdReturn=:bool', { bool: false })
            .getMany();
        var amount = 0;
        for (var i = 0; i < emd.length; i++) {
            amount += emd[i].earnestmoney;
        }
        return amount;
    }
    async analytics(body) {
        const response = {
            data: null,
            message: "Invalid request",
            responseCode: 400
        };
        try {
            const finalData = [];
            if (body.isCompleted == true) {
                const data = await this.repository.find({ isCompleted: true });
                for (let i = 0; i < data.length; i++) {
                    const payload = {
                        name: data[i].name,
                        department: data[i].department.name,
                        acceptanceLetterNumber: data[i].acceptanceLetterNumber,
                        contractAgreementNumber: data[i].contractAgreementNumber,
                    };
                    finalData.push(payload);
                }
            }
            else {
                const data = await this.repository.find({ where: { isCompleted: false }, relations: ['department'] });
                for (let i = 0; i < data.length; i++) {
                    const payload = {
                        name: data[i].name,
                        department: data[i].department.name,
                        acceptanceLetterNumber: data[i].acceptanceLetterNumber,
                        contractAgreementNumber: data[i].contractAgreementNumber,
                    };
                    finalData.push(payload);
                }
            }
            response.data = finalData;
            response.message = "data";
            response.responseCode = 200;
        }
        catch (error) {
            console.log(error);
            response.message = "Failed to save";
            response.responseCode = 400;
        }
        return response;
    }
};
TendorsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(tendor_entity_1.Tendor)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        common_service_1.CommonService])
], TendorsService);
exports.TendorsService = TendorsService;
//# sourceMappingURL=tendor.service.js.map
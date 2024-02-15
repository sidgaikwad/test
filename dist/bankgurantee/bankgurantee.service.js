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
exports.BankGuranteesService = void 0;
const common_1 = require("@nestjs/common");
const crud_typeorm_1 = require("@nestjsx/crud-typeorm");
const bankgurantee_entity_1 = require("./bankgurantee.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const common_service_1 = require("../common/common.service");
const settings_entity_1 = require("../settings/settings.entity");
const tendor_entity_1 = require("../tendor/tendor.entity");
let BankGuranteesService = class BankGuranteesService extends crud_typeorm_1.TypeOrmCrudService {
    constructor(bankGuranteesRepository, settingRepository, tendorRepository, commonService) {
        super(bankGuranteesRepository);
        this.commonService = commonService;
        this.repository = null;
        this.settingRepository = null;
        this.tendorRepository = null;
        this.repository = bankGuranteesRepository;
        this.settingRepository = settingRepository;
        this.tendorRepository = tendorRepository;
    }
    async getCount(query) {
        return await this.count();
    }
    async updateValue() {
        const response = {
            message: "Invalid request",
            responseCode: 400,
        };
        try {
            const balance = await this.settingRepository.query(`select sum(amount) from "bankGurantee" as balance where "isFdr" = false`);
            const sum = balance[0].sum == null ? 0 : Number(balance[0].sum);
            const fdr = await this.settingRepository.query(`select sum("fdrDeposit") from "bankGurantee" as fdr`);
            const fdrNum = fdr[0].sum == null ? 0 : Number(fdr[0].sum);
            const setting = await this.settingRepository.find();
            const extraBgTakenBalance = setting[0].bgLimit > sum ? 0 : sum - setting[0].bgLimit;
            const marginreqOnBgLimit = (setting[0].margin) / 100 * setting[0].bgLimit;
            const totalFdrReq = marginreqOnBgLimit + setting[0].extraMarReqForExtraBg;
            const extraFdrGivenToBank = totalFdrReq - fdrNum;
            await this.settingRepository.update({ id: setting[0].id }, { totalBgTaken: sum, actualFdrGiven: fdrNum, extraBgTakenBalance: extraBgTakenBalance, marginreqOnBgLimit: marginreqOnBgLimit, extraMarReqForExtraBg: extraBgTakenBalance, totalFdrReq: totalFdrReq, extraFdrGivenToBank: extraFdrGivenToBank });
            response.message = "values updated";
            response.responseCode = 200;
        }
        catch (error) {
            console.log(error);
            response.message = "Error while updating";
        }
        return response;
    }
    async analytics(body) {
        const response = {
            data: null,
            message: "Invalid request",
            responseCode: 400
        };
        try {
            const finalData = [];
            const data = await this.tendorRepository.query(`
                select tendor.id,tendor.name ,tendor."acceptanceLetterNumber", tendor."contractAgreementNumber",
                "department-master".name as "departName",
                "advertisedValue",
                "periodComp",
                "extensionTill",
                "tendor"."completedDate"
                from tendor
                left join "department-master" on "department-master".id = tendor."departmentId"
                where tendor."isCompleted" = ${body.isCompleted}`);
            for (let i = 0; i < data.length; i++) {
                const sale = await this.repository.query(`select sum(gross) from sales where "tendorId" = ${data[i].id}`);
                const percent = (sale[0].sum * 100) / data[0].advertisedValue;
                const payload = {
                    name: data[i].name,
                    department: data[i].departName,
                    acceptanceLetterNumber: data[i].acceptanceLetterNumber,
                    contractAgreementNumber: data[i].contractAgreementNumber,
                    advertisedValue: data[0].advertisedValue,
                    extensionTill: data[0].extensionTill,
                    periodComp: data[0].periodComp,
                    amountrecieve: sale[0].sum,
                    completedDate: data[0].completedDate,
                    balanceAmount: data[0].advertisedValue - sale[0].sum,
                    percentOfcompletion: percent.toFixed(2)
                };
                finalData.push(payload);
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
BankGuranteesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(bankgurantee_entity_1.BankGurantee)),
    __param(1, typeorm_1.InjectRepository(settings_entity_1.Settings)),
    __param(2, typeorm_1.InjectRepository(tendor_entity_1.Tendor)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        common_service_1.CommonService])
], BankGuranteesService);
exports.BankGuranteesService = BankGuranteesService;
//# sourceMappingURL=bankgurantee.service.js.map
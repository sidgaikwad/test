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
exports.BankStatementsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const crud_typeorm_1 = require("@nestjsx/crud-typeorm");
const common_service_1 = require("../common/common.service");
const typeorm_2 = require("typeorm");
const bank_statement_entity_1 = require("./bank-statement.entity");
const axios = require('axios');
const otpGenerator = require('otp-generator');
let BankStatementsService = class BankStatementsService extends crud_typeorm_1.TypeOrmCrudService {
    constructor(BankStatementsRepository) {
        super(BankStatementsRepository);
        this.repository = null;
        this.repository = BankStatementsRepository;
    }
    async getCount(query) {
        return await this.count();
    }
    async getBalance() {
        const response = { message: 'Invalid request', responseCode: 400, balanace: null };
        try {
            const balance = await this.repository.query('select sum(amount) from "bank-statement" as balance ');
            response.balanace = Number(balance[0].sum);
            response.responseCode = 200;
            response.message = 'balance';
        }
        catch (err) {
            console.log(err);
            response.responseCode = 400;
            response.message = 'failed to check';
        }
        return response;
    }
};
BankStatementsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(bank_statement_entity_1.BankStatement)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BankStatementsService);
exports.BankStatementsService = BankStatementsService;
//# sourceMappingURL=bank-statement.service.js.map
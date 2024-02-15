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
exports.BankStatementsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const crud_1 = require("@nestjsx/crud");
const bank_statement_entity_1 = require("./bank-statement.entity");
const bank_statement_service_1 = require("./bank-statement.service");
let BankStatementsController = class BankStatementsController {
    constructor(service) {
        this.service = service;
    }
    async getCount(query, res) {
        const count = await this.service.getCount(query);
        return res.status(common_1.HttpStatus.OK).json(count);
    }
    async getBalance(req, res) {
        const data = await this.service.getBalance();
        return res.status(common_1.HttpStatus.OK).json(data);
    }
};
__decorate([
    common_1.Get('count'),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BankStatementsController.prototype, "getCount", null);
__decorate([
    common_1.Get('get-balance'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BankStatementsController.prototype, "getBalance", null);
BankStatementsController = __decorate([
    crud_1.Crud({
        model: {
            type: bank_statement_entity_1.BankStatement,
        },
    }),
    swagger_1.ApiTags('bank-statement'),
    common_1.Controller('bank-statement'),
    __metadata("design:paramtypes", [bank_statement_service_1.BankStatementsService])
], BankStatementsController);
exports.BankStatementsController = BankStatementsController;
//# sourceMappingURL=bank-statement.controller.js.map
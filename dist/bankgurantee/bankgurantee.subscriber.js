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
exports.BankGuranteeSubscriber = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_service_1 = require("../common/common.service");
const settings_entity_1 = require("../settings/settings.entity");
const typeorm_2 = require("typeorm");
const bankgurantee_entity_1 = require("./bankgurantee.entity");
const bankgurantee_service_1 = require("./bankgurantee.service");
let BankGuranteeSubscriber = class BankGuranteeSubscriber {
    constructor(settingRepository, connection, adminsService, commonService) {
        this.adminsService = adminsService;
        this.commonService = commonService;
        this.repository = null;
        this.settingRepository = null;
        connection.subscribers.push(this);
        this.settingRepository = settingRepository;
    }
    listenTo() {
        return bankgurantee_entity_1.BankGurantee;
    }
};
BankGuranteeSubscriber = __decorate([
    typeorm_2.EventSubscriber(),
    __param(0, typeorm_1.InjectRepository(settings_entity_1.Settings)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Connection,
        bankgurantee_service_1.BankGuranteesService,
        common_service_1.CommonService])
], BankGuranteeSubscriber);
exports.BankGuranteeSubscriber = BankGuranteeSubscriber;
//# sourceMappingURL=bankgurantee.subscriber.js.map
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminsSubscriber = void 0;
const common_service_1 = require("../common/common.service");
const typeorm_1 = require("typeorm");
const admins_entity_1 = require("./admins.entity");
const admins_service_1 = require("./admins.service");
let AdminsSubscriber = class AdminsSubscriber {
    constructor(connection, adminsService, commonService) {
        this.adminsService = adminsService;
        this.commonService = commonService;
        this.repository = null;
        connection.subscribers.push(this);
    }
    listenTo() {
        return admins_entity_1.Admin;
    }
    async beforeInsert(event) {
        event.entity.password = await this.commonService.getHash(event.entity.password);
    }
};
AdminsSubscriber = __decorate([
    typeorm_1.EventSubscriber(),
    __metadata("design:paramtypes", [typeorm_1.Connection,
        admins_service_1.AdminsService,
        common_service_1.CommonService])
], AdminsSubscriber);
exports.AdminsSubscriber = AdminsSubscriber;
//# sourceMappingURL=admins.subscriber.js.map
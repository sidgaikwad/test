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
exports.CommonService = void 0;
const jwt_1 = require("@nestjs/jwt");
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const constants_1 = require("../constants");
let CommonService = class CommonService {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async getHash(password) {
        return bcrypt.hash(password, constants_1.GLOBAL.bcrypt.saltRounds);
    }
    async compareHash(password, hash) {
        return bcrypt.compare(password, hash);
    }
    jwtSignup(payload) {
        return this.jwtService.sign(payload);
    }
    jwtVerify(token) {
        return this.jwtService.verify(token);
    }
};
CommonService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], CommonService);
exports.CommonService = CommonService;
//# sourceMappingURL=common.service.js.map
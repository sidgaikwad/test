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
exports.RolesGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const common_service_1 = require("../common/common.service");
let RolesGuard = class RolesGuard {
    constructor(reflector, common) {
        this.reflector = reflector;
        this.common = common;
    }
    canActivate(context) {
        const isPublic = this.reflector.get('isPublic', context.getHandler());
        if (isPublic) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const user = this.getPayload(context);
        if (user) {
            request.user = user;
        }
        return true;
    }
    getPayload(context) {
        const request = context.switchToHttp().getRequest();
        if (typeof request.headers.authorization !== 'undefined') {
            const authorization = request.headers.authorization.split(' ')[1];
            try {
                return this.common.jwtVerify(authorization);
            }
            catch (e) {
                throw new common_1.UnauthorizedException('Unauthorized Get Payload');
            }
        }
        else {
            throw new common_1.UnauthorizedException('Unauthorized authorization header');
        }
    }
};
RolesGuard = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [core_1.Reflector,
        common_service_1.CommonService])
], RolesGuard);
exports.RolesGuard = RolesGuard;
//# sourceMappingURL=roles.guard.js.map
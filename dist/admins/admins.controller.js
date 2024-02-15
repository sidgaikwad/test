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
exports.AdminsController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const crud_1 = require("@nestjsx/crud");
const public_decorator_1 = require("../decorator/public.decorator");
const admins_entity_1 = require("./admins.entity");
const admins_service_1 = require("./admins.service");
let AdminsController = class AdminsController {
    constructor(service) {
        this.service = service;
    }
    async login(req, res) {
        const admin = await this.service.login(req.user);
        return res.status(common_1.HttpStatus.OK).json({
            accessToken: admin.access_token,
        });
    }
    async forget(req, res) {
        try {
            const data = await this.service.forget(req.body.email);
            return res.status(common_1.HttpStatus.OK).json(data);
        }
        catch (error) {
            console.log('AdminsController -> verify -> error', error);
        }
    }
    async resetPassword(body, res) {
        const data = await this.service.resetPassword(body);
        return res.status(common_1.HttpStatus.OK).json(data);
    }
    async checkLink(body, res) {
        const data = await this.service.checkLink(body);
        return res.status(common_1.HttpStatus.OK).json(data);
    }
    async me(req, res) {
        const data = await this.service.me(req.user.id);
        return res.status(common_1.HttpStatus.OK).json(data);
    }
    async changePassword(req, res) {
        try {
            const data = await this.service.changePassword(req.body, req.user);
            return res.status(common_1.HttpStatus.OK).json(data);
        }
        catch (error) {
            console.log('UsersController -> changePassword -> error', error);
        }
    }
    async logout() {
        return true;
    }
};
__decorate([
    public_decorator_1.Public(),
    common_1.UseGuards(passport_1.AuthGuard('local')),
    common_1.Post('login'),
    __param(0, common_1.Request()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AdminsController.prototype, "login", null);
__decorate([
    public_decorator_1.Public(),
    common_1.Post('forgot'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AdminsController.prototype, "forget", null);
__decorate([
    public_decorator_1.Public(),
    common_1.Post('reset-password'),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AdminsController.prototype, "resetPassword", null);
__decorate([
    public_decorator_1.Public(),
    common_1.Post('check-link'),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AdminsController.prototype, "checkLink", null);
__decorate([
    common_1.Post('me'),
    __param(0, common_1.Request()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AdminsController.prototype, "me", null);
__decorate([
    common_1.Put('change-password'),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AdminsController.prototype, "changePassword", null);
__decorate([
    common_1.Post('logout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminsController.prototype, "logout", null);
AdminsController = __decorate([
    crud_1.Crud({
        model: {
            type: admins_entity_1.Admin,
        },
        query: {
            exclude: ['password'],
            join: {
                adminsRole: {
                    eager: true,
                    allow: ['id', 'name'],
                },
            },
        },
    }),
    swagger_1.ApiTags('admins'),
    common_1.Controller('admins'),
    __metadata("design:paramtypes", [admins_service_1.AdminsService])
], AdminsController);
exports.AdminsController = AdminsController;
//# sourceMappingURL=admins.controller.js.map
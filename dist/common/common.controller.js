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
exports.CommonController = void 0;
const common_1 = require("@nestjs/common");
const public_decorator_1 = require("../decorator/public.decorator");
const constants_1 = require("../constants");
const platform_express_1 = require("@nestjs/platform-express");
const multer_options_1 = require("../multer-config/multer-options");
let CommonController = class CommonController {
    async uploadFile(file) {
        console.log(file);
        return constants_1.GLOBAL.url + file.filename;
    }
    async appVersion() {
        return [
            '2.0.0', '2.0.1', '2.0.2',
        ];
    }
};
__decorate([
    public_decorator_1.Public(),
    common_1.Post('upload'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file', multer_options_1.multerUpload)),
    __param(0, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommonController.prototype, "uploadFile", null);
__decorate([
    public_decorator_1.Public(),
    common_1.Get('app_version'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CommonController.prototype, "appVersion", null);
CommonController = __decorate([
    common_1.Controller('common')
], CommonController);
exports.CommonController = CommonController;
//# sourceMappingURL=common.controller.js.map
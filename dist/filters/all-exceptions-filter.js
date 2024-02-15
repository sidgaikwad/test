"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
let AllExceptionsFilter = class AllExceptionsFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception instanceof common_1.HttpException
            ? exception.getStatus()
            : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        const customResponse = {
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            message: null,
            errorCode: null,
        };
        const responseStatus = exception.status ? exception.status : exception.name;
        console.log(exception);
        switch (responseStatus) {
            case 'QueryFailedError':
                customResponse.message = exception.detail;
                if (exception.code === '23505') {
                    customResponse.errorCode = exception.code;
                    customResponse.erroredField = customResponse.message.substring(customResponse.message.indexOf('(') + 2, customResponse.message.indexOf(')=') - 1);
                }
                break;
            case 401:
                customResponse.message = 'Invalid credentials';
                break;
            case 403:
                customResponse.message = exception.message;
                break;
            case 404:
                customResponse.message = 'Not Found';
                break;
            case 413:
                customResponse.message = exception.message;
                break;
            case 415:
                customResponse.message = exception.message;
                break;
        }
        response.status(status).json(customResponse);
    }
};
AllExceptionsFilter = __decorate([
    common_1.Catch()
], AllExceptionsFilter);
exports.AllExceptionsFilter = AllExceptionsFilter;
//# sourceMappingURL=all-exceptions-filter.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SESConfig = exports.QUERY_OPTIONS = exports.USER = exports.JWT_MODULE_OPTIONS = exports.GLOBAL = void 0;
exports.GLOBAL = {
    JWT: {
        secret: 'x5kZivtV3arfTcxVKy4wRxJemLP2Ik1vL8PEShIJoKYeQIEcpWl5zmFo0AZZWWz',
    },
    bcrypt: {
        saltRounds: 10,
    },
    url: 'http://localhost:3008/public/',
    SMS: {
        OTP: {
            AppSid: '360413AawozVZecw6098d0deP1',
            TemplateId: '60db6cdeca581f28c21ae142',
        },
        Transactional: {
            AppSid: '360413AawozVZecw6098d0deP1',
            TemplateId: '60db6cdeca581f28c21ae142',
        },
    },
};
exports.JWT_MODULE_OPTIONS = {
    secret: exports.GLOBAL.JWT.secret,
    signOptions: {
        expiresIn: '14w',
    },
};
exports.USER = {
    avatar: 'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png',
};
exports.QUERY_OPTIONS = {
    limit: 25,
};
exports.SESConfig = { SECRET: 'aSQSYb5aovksMv6wSC2CQxgDELwHqnaXuMicPSKV', AKI_KEY: 'AKIAQKG7REHTYCFZHZNU', REGION: 'ap-south-1', };
//# sourceMappingURL=constants.js.map
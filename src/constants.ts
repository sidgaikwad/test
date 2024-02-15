import { JwtModuleOptions } from '@nestjs/jwt';

export const GLOBAL = {
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
export const JWT_MODULE_OPTIONS: JwtModuleOptions = {
    secret: GLOBAL.JWT.secret,
    signOptions: {
        expiresIn: '14w',
    },
};
export const USER = {
    avatar: 'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png',
};

export const QUERY_OPTIONS = {
    limit: 25,
};

export const SESConfig = { SECRET: 'aSQSYb5aovksMv6wSC2CQxgDELwHqnaXuMicPSKV', AKI_KEY: 'AKIAQKG7REHTYCFZHZNU', REGION: 'ap-south-1', };
import { JwtModuleOptions } from '@nestjs/jwt';
export declare const GLOBAL: {
    JWT: {
        secret: string;
    };
    bcrypt: {
        saltRounds: number;
    };
    url: string;
    SMS: {
        OTP: {
            AppSid: string;
            TemplateId: string;
        };
        Transactional: {
            AppSid: string;
            TemplateId: string;
        };
    };
};
export declare const JWT_MODULE_OPTIONS: JwtModuleOptions;
export declare const USER: {
    avatar: string;
};
export declare const QUERY_OPTIONS: {
    limit: number;
};
export declare const SESConfig: {
    SECRET: string;
    AKI_KEY: string;
    REGION: string;
};

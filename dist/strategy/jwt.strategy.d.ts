import { Reflector } from '@nestjs/core';
import { Strategy } from 'passport-jwt';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly reflector;
    constructor(reflector: Reflector);
    validate(payload: any): Promise<any>;
}
export {};

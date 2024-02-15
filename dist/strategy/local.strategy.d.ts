import { Strategy } from 'passport-local';
import { AdminsService } from '../admins/admins.service';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private readonly adminService;
    constructor(adminService: AdminsService);
    validate(email: string, password: string): Promise<any>;
}
export {};

import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { CommonService } from 'src/common/common.service';
export declare class RolesGuard implements CanActivate {
    private readonly reflector;
    private readonly common;
    constructor(reflector: Reflector, common: CommonService);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
    getPayload(context: ExecutionContext): any;
}

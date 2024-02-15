import { CrudController } from '@nestjsx/crud';
import { Admin } from './admins.entity';
import { AdminsService } from './admins.service';
export declare class AdminsController implements CrudController<Admin> {
    service: AdminsService;
    constructor(service: AdminsService);
    login(req: any, res: any): Promise<any>;
    forget(req: any, res: any): Promise<any>;
    resetPassword(body: any, res: any): Promise<any>;
    checkLink(body: any, res: any): Promise<any>;
    me(req: any, res: any): Promise<any>;
    changePassword(req: any, res: any): Promise<any>;
    logout(): Promise<boolean>;
}

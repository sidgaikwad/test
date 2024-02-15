import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AdminsService } from '../admins/admins.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly adminService: AdminsService) {
        super({
            usernameField: 'email',
            passwordField: 'password',
        });
    }

    async validate(email: string, password: string): Promise<any> {
        const admin = await this.adminService.validateAdmin(email, password);
        if (!admin) {
            throw new UnauthorizedException('Unauthorized Local Strategy');
        }
        return admin;
    }
}

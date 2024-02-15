import { Body, Controller, Get, HttpStatus, Post, Put, Req, Request, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Public } from 'src/decorator/public.decorator';
import { Admin } from './admins.entity';
import { AdminsService } from './admins.service';
@Crud({
    model: {
        type: Admin,
    },
    query: {
        exclude: ['password'],
        join: {
            adminsRole: {
                eager: true,
                allow: ['id', 'name'],
            },
        },
    },
})
@ApiTags('admins')
@Controller('admins')
export class AdminsController implements CrudController<Admin> {
    constructor(
        public service: AdminsService,
    ) {
    }

    @Public()
    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req, @Res() res) {
        const admin = await this.service.login(req.user);
        return res.status(HttpStatus.OK).json({
            accessToken: admin.access_token,
        });
    }

    @Public()
    @Post('forgot')
    async forget(@Req() req: any, @Res() res: any) {
        try {
            const data = await this.service.forget(req.body.email);
            return res.status(HttpStatus.OK).json(data);
        } catch (error) {
            console.log('AdminsController -> verify -> error', error);
        }
    }

    @Public()
    @Post('reset-password')
    async resetPassword(@Body() body: any, @Res() res: any) {
        const data = await this.service.resetPassword(body);
        return res.status(HttpStatus.OK).json(data);
    }

    @Public()
    @Post('check-link')
    async checkLink(@Body() body: any, @Res() res: any) {
        const data = await this.service.checkLink(body);
        return res.status(HttpStatus.OK).json(data);
    }

    @Post('me')
    async me(@Request() req: any, @Res() res: any) {
        const data = await this.service.me(req.user.id);
        return res.status(HttpStatus.OK).json(data);
    }

    @Put('change-password')
    async changePassword(@Req() req, @Res() res) {
        try {
            const data = await this.service.changePassword(req.body, req.user);
            return res.status(HttpStatus.OK).json(data);
        } catch (error) { 
            console.log('UsersController -> changePassword -> error', error);
        }
    }

    @Post('logout')
    async logout() {
        return true;
    }
}

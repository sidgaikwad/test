import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { Public } from 'src/decorator/public.decorator';
import { GLOBAL } from '../constants';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerUpload } from 'src/multer-config/multer-options';

@Controller('common')
export class CommonController {
    @Public()
    @Post('upload')
    @UseInterceptors(FileInterceptor('file', multerUpload))
    async uploadFile(@UploadedFile() file: any): Promise<string> {
        console.log(file)
        return GLOBAL.url + file.filename;
    }

    @Public()
    @Get('app_version')
    async appVersion(): Promise<string[]> {
        return [
            '2.0.0', '2.0.1', '2.0.2',
        ];
    }
}

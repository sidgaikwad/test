import * as multer from 'multer';
import * as path from 'path';

export const storageEngine = multer.diskStorage({
    destination: path.join(__dirname, '../..', 'public'),
    filename: (req: any, file: any, cb: any) => {
        const datetimestamp = Date.now();
        const extenstion = path.extname(file.originalname);
        let fileName = path.basename(file.originalname, extenstion);
        // replace special chars with hyphen and remove extra hyphens
        fileName = fileName.replace(/[^a-zA-Z]/g, '-').replace(/-{2,}/g, '-');
        // check if lenght more than 20 then trim
        fileName = fileName.substring(0, 20).toLowerCase();
        // callback
        cb(null, datetimestamp + '-' + fileName + extenstion);
    }
})

export const storageResumeEngine = multer.diskStorage({
    destination: path.join(__dirname, '../..', 'resume'),
    filename: (req: any, file: any, cb: any) => {
        const datetimestamp = Date.now();
        const extenstion = path.extname(file.originalname);
        let fileName = path.basename(file.originalname, extenstion);
        // replace special chars with hyphen and remove extra hyphens
        fileName = fileName.replace(/[^a-zA-Z]/g, '-').replace(/-{2,}/g, '-');
        // check if lenght more than 20 then trim
        fileName = fileName.substring(0, 20).toLowerCase();
        // callback
        cb(null, datetimestamp + '-' + fileName + extenstion);
    }
})

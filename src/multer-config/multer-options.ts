import * as path from 'path';
import { UnsupportedMediaTypeException } from '@nestjs/common';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { storageEngine, storageResumeEngine } from './multer-storage';

export const multerUpload: MulterOptions = {
    storage: storageEngine,
    limits: { fileSize: 100000000 },
    fileFilter: (req: any, file: any, cb: any) => {
        validateFile(file, cb);
    }
}

export const multerUploadResume: MulterOptions = {
    storage: storageResumeEngine,
    limits: { fileSize: 5000000 },
    fileFilter: (req: any, file: any, cb: any) => {
        validateResumeFile(file, cb);
    }
}

var validateResumeFile = (file: any, cb: any) => {
    var allowedFileTypes = /jpeg|jpg|png|pdf|docx|csv|xlsx|xls|xlsm|xlsb|xltx|xltm|xlt|xml|xlam|xla|xlw|xlr/;
    const extension = allowedFileTypes.test(path.extname(file.originalname));
    if (extension) {
        return cb(null, true);
    } else {
        cb("Invalid file type. Only PDF, DOCS file are allowed.");
    }
}

var validateFile = (file: any, cb: any) => {
    var allowedFileTypes = /jpeg|jpg|png|pdf|docx|PNG|JPG|JPEG|PDF|DOCX|apk|csv|xlsx|xls|xlsm|xlsb|xltx|xltm|xlt|xml|xlam|xla|xlw|xlr/;
    const extension = allowedFileTypes.test(path.extname(file.originalname));
    if (extension) {
        return cb(null, true);
    } else {
        cb("Invalid file type. Only JPEG, PNG file are allowed.");
    }
}


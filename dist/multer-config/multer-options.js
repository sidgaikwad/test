"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerUploadResume = exports.multerUpload = void 0;
const path = require("path");
const multer_storage_1 = require("./multer-storage");
exports.multerUpload = {
    storage: multer_storage_1.storageEngine,
    limits: { fileSize: 100000000 },
    fileFilter: (req, file, cb) => {
        validateFile(file, cb);
    }
};
exports.multerUploadResume = {
    storage: multer_storage_1.storageResumeEngine,
    limits: { fileSize: 5000000 },
    fileFilter: (req, file, cb) => {
        validateResumeFile(file, cb);
    }
};
var validateResumeFile = (file, cb) => {
    var allowedFileTypes = /jpeg|jpg|png|pdf|docx|csv|xlsx|xls|xlsm|xlsb|xltx|xltm|xlt|xml|xlam|xla|xlw|xlr/;
    const extension = allowedFileTypes.test(path.extname(file.originalname));
    if (extension) {
        return cb(null, true);
    }
    else {
        cb("Invalid file type. Only PDF, DOCS file are allowed.");
    }
};
var validateFile = (file, cb) => {
    var allowedFileTypes = /jpeg|jpg|png|pdf|docx|PNG|JPG|JPEG|PDF|DOCX|apk|csv|xlsx|xls|xlsm|xlsb|xltx|xltm|xlt|xml|xlam|xla|xlw|xlr/;
    const extension = allowedFileTypes.test(path.extname(file.originalname));
    if (extension) {
        return cb(null, true);
    }
    else {
        cb("Invalid file type. Only JPEG, PNG file are allowed.");
    }
};
//# sourceMappingURL=multer-options.js.map
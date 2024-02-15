"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageResumeEngine = exports.storageEngine = void 0;
const multer = require("multer");
const path = require("path");
exports.storageEngine = multer.diskStorage({
    destination: path.join(__dirname, '../..', 'public'),
    filename: (req, file, cb) => {
        const datetimestamp = Date.now();
        const extenstion = path.extname(file.originalname);
        let fileName = path.basename(file.originalname, extenstion);
        fileName = fileName.replace(/[^a-zA-Z]/g, '-').replace(/-{2,}/g, '-');
        fileName = fileName.substring(0, 20).toLowerCase();
        cb(null, datetimestamp + '-' + fileName + extenstion);
    }
});
exports.storageResumeEngine = multer.diskStorage({
    destination: path.join(__dirname, '../..', 'resume'),
    filename: (req, file, cb) => {
        const datetimestamp = Date.now();
        const extenstion = path.extname(file.originalname);
        let fileName = path.basename(file.originalname, extenstion);
        fileName = fileName.replace(/[^a-zA-Z]/g, '-').replace(/-{2,}/g, '-');
        fileName = fileName.substring(0, 20).toLowerCase();
        cb(null, datetimestamp + '-' + fileName + extenstion);
    }
});
//# sourceMappingURL=multer-storage.js.map
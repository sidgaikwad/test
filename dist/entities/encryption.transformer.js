"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptionTransformer = void 0;
const bcrypt = require("bcrypt");
const constants_1 = require("../constants");
exports.encryptionTransformer = {
    from(hash) {
        return hash;
    },
    to(password) {
        const hash = bcrypt.hashSync(password, constants_1.GLOBAL.bcrypt.saltRounds);
        return hash;
    },
};
//# sourceMappingURL=encryption.transformer.js.map
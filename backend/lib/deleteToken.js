"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const consts_1 = require("../../src/utils/consts");
function deleteToken(access_token) {
    const pathname = path_1.default.join(consts_1.CWD, '/backend/db/entries/tokens/' + access_token + '.json');
    console.log({ tokenToBeDeleted: access_token });
    try {
        console.log({ pathname });
        fs_1.default.unlinkSync(pathname);
        return true;
    }
    catch (error) {
        console.log({ error });
        return false;
    }
}
exports.default = deleteToken;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const consts_1 = require("../../src/utils/consts");
const fs_1 = __importDefault(require("fs"));
function writeToken(access_token, user) {
    const token = {
        access_token,
        created_at: Date.now(),
        user,
    };
    const path = consts_1.CWD + '/backend/db/entries/tokens/' + access_token + '.json';
    try {
        fs_1.default.writeFileSync(path, JSON.stringify(token), { encoding: 'utf-8' });
        return Object.assign(Object.assign({}, token), { status: 200, ok: true });
    }
    catch (error) {
        return {
            status: 500,
            ok: false
        };
    }
}
exports.default = writeToken;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CRUD = void 0;
const consts_1 = require("../src/utils/consts");
const fs_1 = __importDefault(require("fs"));
class CRUD {
    constructor() {
        this.secret = 'MY_ENV_VAR';
        this.dbPath = consts_1.CWD + '/backend/db';
    }
    validateSecret(secret) { return secret === this.secret ? true : false; }
    getUser(username, secret) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.validateSecret(secret))
                return { ok: 401 };
            /////
            try {
                const userFilePath = this.dbPath + '/entries/users/' + username + '.json';
                const user = fs_1.default.readFileSync(userFilePath, 'utf-8');
                return {
                    user,
                    ok: 200,
                };
            }
            catch (err) {
                if (err.code === 'ENOENT')
                    return {
                        ok: 404
                    };
                else
                    return {
                        ok: 500
                    };
            }
            ////
        });
    }
    createUser(username, password, secret) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.validateSecret(secret))
                return { ok: 401 };
            ////
            try {
                const userFilePath = this.dbPath + '/entries/users/' + username + '.json';
                const data = JSON.stringify({ username, password });
                //returns undefined
                fs_1.default.writeFileSync(userFilePath, data, 'utf-8');
                return {
                    ok: 200,
                };
            }
            catch (err) {
                return {
                    ok: 500
                };
            }
            ////
        });
    }
}
exports.CRUD = CRUD;

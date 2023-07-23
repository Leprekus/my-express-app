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
                return { status: 401, ok: false };
            /////
            try {
                const userFilePath = this.dbPath + '/entries/users/' + username + '.json';
                const json = fs_1.default.readFileSync(userFilePath, 'utf-8');
                const user = JSON.parse(json);
                return {
                    user,
                    status: 200,
                    ok: true
                };
            }
            catch (err) {
                if (err.code === 'ENOENT')
                    return {
                        status: 404,
                        ok: false
                    };
                else
                    return {
                        status: 500,
                        ok: false
                    };
            }
            ////
        });
    }
    createUser(username, password, secret) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.validateSecret(secret))
                return { status: 401, ok: false };
            ////
            try {
                const userFilePath = this.dbPath + '/entries/users/' + username + '.json';
                const data = JSON.stringify({ username, password });
                //returns undefined
                fs_1.default.writeFileSync(userFilePath, data, 'utf-8');
                return {
                    status: 200,
                    ok: false
                };
            }
            catch (err) {
                return {
                    status: 500,
                    ok: false
                };
            }
            ////
        });
    }
}
exports.CRUD = CRUD;

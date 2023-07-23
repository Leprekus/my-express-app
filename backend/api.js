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
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
const CRUD_1 = require("./CRUD");
class API {
    constructor() {
        this.crud = new CRUD_1.CRUD();
        this.token = null;
        this.secret = 'MY_ENV_VAR';
    }
    validateToken(token) {
        return token === 'my_access_token' ? true : false;
    }
    validateClientCredentials(credentials) {
        const { client_id, client_secret } = credentials;
        if (client_id !== process.env.CLIENT_ID &&
            client_secret !== process.env.CLIENT_SECRET)
            return false;
        return true;
    }
    getAccessToken(credentials) {
        const { client_id, client_secret } = credentials;
        if (client_id !== process.env.CLIENT_ID &&
            client_secret !== process.env.CLIENT_SECRET)
            return {
                ok: false,
                status: 404
            };
        const token = generateToken();
    }
    getUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, client_credentials } = data;
            if (!this.validateClientCredentials(client_credentials))
                return {
                    ok: false,
                    status: 401
                };
            const user = yield this.crud.getUser(username, this.secret);
            return user;
        });
    }
    createUser(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, password, client_credentials } = data;
            if (!this.validateClientCredentials(client_credentials)) {
                return {
                    ok: false,
                    status: 401
                };
            }
            const newUser = yield this.crud.createUser(username, password, this.secret);
            return newUser;
        });
    }
    getPost() { return 0; }
}
exports.API = API;

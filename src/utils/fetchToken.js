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
const main_1 = require("../../backend/main");
function fetchToken(username, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const credentials = {
            client_id: process.env.CLIENT_ID,
            client_secret: process.env.CLIENT_SECRET
        };
        const data = {
            username, password, client_credentials: credentials
        };
        const user = yield main_1.api.signIn(data);
        return user;
    });
}
exports.default = fetchToken;

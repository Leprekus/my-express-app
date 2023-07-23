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
exports.handler = void 0;
const main_1 = require("../../../../backend/main");
const handler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const cookieToken = req.cookies?.token
    // if(req.cookies?.token) return res.status(200).json({ token: cookieToken })
    // const token = await fetchToken()
    // const newCookieToken = res.cookie('token',token, { maxAge: 900000, httpOnly: true });
    // const { username, password } = req?.body
    // console.log(username, password)
    const { username, password } = req === null || req === void 0 ? void 0 : req.body;
    const credentials = {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET
    };
    const data = {
        username, password, client_credentials: credentials
    };
    const user = yield main_1.api.signIn(data);
    console.log({ user });
    return res.status(200).json({ data: 'Login successful' });
});
exports.handler = handler;

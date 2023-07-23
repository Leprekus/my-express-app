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
exports.handler = void 0;
const fetchToken_1 = __importDefault(require("../../../utils/fetchToken"));
const handler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const cookieToken = req.cookies?.token
    // if(req.cookies?.token) return res.status(200).json({ token: cookieToken })
    var _a;
    // const token = await fetchToken()
    // const newCookieToken = res.cookie('token',token, { maxAge: 900000, httpOnly: true });
    // const { username, password } = req?.body
    // console.log(username, password)
    const { username, password } = req === null || req === void 0 ? void 0 : req.body;
    const cookieToken = ((_a = req.cookies) === null || _a === void 0 ? void 0 : _a.token) || null;
    if (!cookieToken) {
        const token = yield (0, fetchToken_1.default)(username, password);
        res.cookie('token', token, { maxAge: 900000, httpOnly: true });
    }
    return cookieToken.ok ? res.redirect('/home') :
        res.status(cookieToken.status).json({ data: 'Failed to retrieve token' });
});
exports.handler = handler;

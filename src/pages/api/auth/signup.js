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
    console.log({ test: req.cookies.token });
    const cookieToken = req.cookies.token;
    if (req.cookies.token)
        return res.status(200).json({ token: cookieToken });
    const token = yield (0, fetchToken_1.default)();
    const newCookieToken = res.cookie('token', token, { maxAge: 900000, httpOnly: true });
    return newCookieToken.status(200).json({ token });
});
exports.handler = handler;

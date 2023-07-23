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
    var _a;
    const { username, password } = req === null || req === void 0 ? void 0 : req.body;
    const HOUR_IN_MILISECONDS = 3000000;
    const cookieToken = ((_a = req.cookies) === null || _a === void 0 ? void 0 : _a.token) || null;
    let token = null;
    if (!cookieToken)
        token = yield (0, fetchToken_1.default)(username, password);
    else {
        token = cookieToken;
    }
    if (!token.ok)
        return res.status(token.status).json({ data: 'Failed to fetch token' });
    token = Object.assign(Object.assign({}, token), { expires_at: token.created_at + HOUR_IN_MILISECONDS });
    res.cookie('token', token, { maxAge: 900000, httpOnly: true });
    return res.status(200).json({ data: token });
});
exports.handler = handler;

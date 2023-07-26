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
const refreshToken_1 = __importDefault(require("./src/utils/refreshToken"));
const setToken_1 = __importDefault(require("./src/utils/setToken"));
const route = {
    exclude: ['/api',],
    protect: ['/',],
};
function middleware(req, res, next) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const pathname = req.path;
        if (route.exclude.some(path => pathname.includes(path)) || pathname === '/login')
            return next();
        let token = (_a = req.cookies) === null || _a === void 0 ? void 0 : _a.token;
        console.log({ token });
        if (token && (token === null || token === void 0 ? void 0 : token.expires_at) < Date.now()) {
            const newToken = (0, refreshToken_1.default)(token);
            return newToken.ok ? (token = (0, setToken_1.default)(newToken, res, req), next()) :
                res.status(token.status).json({ data: 'Failed to fetch token' });
        }
        if ((!token || (token === null || token === void 0 ? void 0 : token.expires_at) < Date.now()) && route.protect.some(path => pathname.includes(path))) {
            return res.redirect('/login');
        }
        return next();
    });
}
exports.default = middleware;

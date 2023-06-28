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
const getUser_1 = __importDefault(require("./src/lib/getUser"));
const route = {
    exclude: ['/api',],
    protect: ['/',],
};
function middleware(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const pathname = req.path;
        if (route.exclude.some(path => path === pathname))
            return next();
        const user = (0, getUser_1.default)();
        if (!user && route.protect.some(path => path === pathname)) {
            return res.redirect('/login');
        }
        return next();
    });
}
exports.default = middleware;

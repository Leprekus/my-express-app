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
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const serveStaticFiles_1 = __importDefault(require("./src/lib/serveStaticFiles"));
const serveApiCall_1 = __importDefault(require("./src/lib/serveApiCall"));
const middleware_1 = __importDefault(require("./middleware"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
// req, res, next params
const cwd = process.cwd();
//makes folders inside static available to the client
app.use(express_1.default.static(path_1.default.join(cwd, 'src/static')));
app.use(body_parser_1.default.urlencoded());
app.use(body_parser_1.default.json());
app.use(middleware_1.default);
//intercepts requests from http://localhost:3000/api/*
app.post('/api/auth/*', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield (0, serveApiCall_1.default)(req, res);
    response;
}));
//intercepts routes
app.get('*', (req, res) => {
    (0, serveStaticFiles_1.default)(req, res);
});
app.listen(3000);

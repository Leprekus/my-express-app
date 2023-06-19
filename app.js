"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const serveStaticFiles_1 = __importDefault(require("./src/lib/serveStaticFiles"));
const serveApiCall_1 = __importDefault(require("./src/lib/serveApiCall"));
const app = (0, express_1.default)();
// req, res, next params
const cwd = process.cwd();
//app.use('/api/auth', (req:, res) => {})
//makes folders inside static available to the client
app.use(express_1.default.static(path_1.default.join(cwd, 'src/static')));
//intercepts requests from http://localhost:3000/api/*
app.get('/api/*', (req, res) => {
    const response = (0, serveApiCall_1.default)(req, res);
    response;
});
//intercepts routes
app.get('*', (req, res) => {
    (0, serveStaticFiles_1.default)(req, res);
});
app.listen(3000);

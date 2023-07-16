"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const https_1 = __importDefault(require("https"));
const server = https_1.default.createServer((req, res) => {
    server.on('request', (req, res) => {
        const { method, url } = req;
        let body = [];
        req.on('data', (chunk) => body.push(chunk))
            .on('end', () => body = Buffer.concat(body).toString());
        req.on('error', (err) => console.log(err.stack));
    });
});

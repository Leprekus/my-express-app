"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const consts_1 = require("../../src/utils/consts");
const fs_1 = __importDefault(require("fs"));
function tokenExists(token) {
    const path = consts_1.CWD + '/backend/db/entries/tokens/' + token;
    try {
        return fs_1.default.existsSync(path);
    }
    catch (error) {
        return false;
    }
}
const MAX_ATTEMPTS = 100;
function generateToken() {
    const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    const tokenLength = 64;
    let attempts = 0;
    let token = '';
    while (token.length < tokenLength && attempts < MAX_ATTEMPTS) {
        const index = Math.floor(Math.random() * CHARACTERS.length);
        token += CHARACTERS[index];
        attempts++;
    }
    if (attempts >= MAX_ATTEMPTS)
        throw Error('Token generation exceeded maximum atttempts');
    while (tokenExists(token)) {
        token = generateToken();
    }
    return token;
}
exports.default = generateToken;

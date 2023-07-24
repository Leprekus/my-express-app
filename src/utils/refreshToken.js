"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../../backend/main");
function refreshToken(token) {
    const client_credentials = {
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET
    };
    const newToken = main_1.api.refreshToken(client_credentials, token);
    return newToken;
}
exports.default = refreshToken;

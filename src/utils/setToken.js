"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function setToken(token, res, req) {
    const HOUR_IN_MILISECONDS = 60 * 60 * 1000;
    const newToken = Object.assign(Object.assign({}, token), { expires_at: token.created_at + HOUR_IN_MILISECONDS });
    res.clearCookie('token');
    res.cookie('token', newToken, { maxAge: 900000, httpOnly: true });
    console.log('tokenSet', newToken);
    return newToken;
}
exports.default = setToken;

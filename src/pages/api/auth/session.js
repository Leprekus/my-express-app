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
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const handler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const cookieToken = ((_a = req.cookies) === null || _a === void 0 ? void 0 : _a.token) || null;
    let token = null;
    //   if(!cookieToken) 
    //     token = await fetchToken(username, password)
    //   else {
    //     token = cookieToken}
    //   if(!token.ok) 
    //     return res.status(token.status).json({ data: 'Failed to fetch token'})
    //   token = ({
    //     ...token,
    //     expires_at: token.created_at! + HOUR_IN_MILISECONDS
    //   } as ClientToken)
    return res.status(200).json({ data: cookieToken });
});
exports.handler = handler;

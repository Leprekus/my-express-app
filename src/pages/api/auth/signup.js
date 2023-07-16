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
const main_1 = require("../../../../backend/main");
const handler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req === null || req === void 0 ? void 0 : req.body;
    const user = yield main_1.api.getUser({ username, token: 'my_access_token' });
    switch (user.ok) {
        case 200:
            return res.status(409).json({ data: 'User already exists' });
        case 500:
            return res.status(500).json({ data: 'Internal Server Error' });
    }
    const data = {
        username,
        password,
        token: 'my_access_token'
    };
    const newUser = yield main_1.api.createUser(data);
    if (!newUser.ok)
        return res.status(500).json({ message: 'Failed to create user' });
    return res.status(200).json({ message: 'Account created successfully' });
});
exports.handler = handler;

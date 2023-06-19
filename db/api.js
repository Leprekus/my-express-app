"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const createUser = (req, res) => {
    const token = req.headers;
    console.log({ token });
};
exports.createUser = createUser;

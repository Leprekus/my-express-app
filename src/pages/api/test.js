"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const handler = (req, res) => {
    return res.status(200).json({ message: 'hello' });
};
exports.handler = handler;

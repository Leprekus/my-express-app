"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editUser = exports.createUser = void 0;
const createUser = (req, res) => {
    const token = req.headers;
    console.log({ token });
};
exports.createUser = createUser;
const editUser = (req, res) => {
    const token = req.headers;
    console.log({ token });
};
exports.editUser = editUser;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.get = exports.create = void 0;
const DatabaseManager_1 = require("./entries/DatabaseManager");
const token = true;
if (!token)
    throw new Error('401 Forbidden');
const db = new DatabaseManager_1.DatabaseManager();
const create = (req, res) => {
    db.
    ;
};
exports.create = create;
const get = (req, res) => {
    const token = req.headers;
    console.log({ token });
};
exports.get = get;
const update = (req, res) => {
    const token = req.headers;
    console.log({ token });
};
exports.update = update;
delete ;
(req, res) => {
    const token = req.headers;
    console.log({ token });
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app = (0, express_1.default)();
// req, res, next params
app.use('/', (req, res, next) => {
    console.log('middleware ran');
    next();
});
const indexFile = process.cwd() + '/index.html';
app.get('/', (req, res) => {
    res.sendFile(indexFile);
});
app.listen(3000);

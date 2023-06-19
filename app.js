"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
// req, res, next params
const cwd = process.cwd();
app.use(express_1.default.static(path_1.default.join(cwd, 'src/static')));
app.get('*', (req, res) => {
    const urlPath = req.path.substr(1); // Remove the leading '/'
    let filePath = ''; // Assuming the files are HTML
    //const indexFile = path.join(cwd, '/index.html')
    if (req.path === '/')
        filePath = path_1.default.join(cwd, '/index.html');
    else
        filePath = path_1.default.join(cwd, urlPath + '.html');
    fs_1.default.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            // If the file is not found or there's an error, send a fallback response
            res.status(404).send('404 Not Found');
        }
        else {
            res.send(data);
        }
    });
});
// app.get('/', (req: express.Request, res: express.Response) => {
//     res.sendFile(indexFile)
// })
app.listen(3000);

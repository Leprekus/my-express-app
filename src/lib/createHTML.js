"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("stream");
function createHTML(props) {
    const HTML = `<!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Document</title>
 </head>
 <body>
 <h1>Hello World</h1>
 <div id="root"></div>
 <script src="/session.js"></script>
 <script id="entry-point">${props.script}</script>
 </body>
 </html>`;
    const readableStream = new stream_1.Readable();
    readableStream.push(HTML);
    readableStream.push(null);
    return readableStream;
}
exports.default = createHTML;

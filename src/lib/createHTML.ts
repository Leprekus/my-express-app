import fs from 'fs'
import { Readable } from 'stream'

interface Props {
    script: string
}
export default function createHTML(props: Props) {
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
 <script id="entry-point">${ props.script }</script>
 </body>
 </html>`
 const readableStream = new Readable()
 readableStream.push(HTML)
 readableStream.push(null)
 return readableStream
}

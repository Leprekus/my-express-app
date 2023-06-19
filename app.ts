import express from 'express'
import path from 'path'
import fs from 'fs'
import serveStaticFiles from './src/lib/serveStaticFiles'
const app = express()

// req, res, next params
const cwd = process.cwd()

app.use(express.static(path.join(cwd, 'src/static')))

app.get('*', (req: express.Request, res: express.Response) => {
    serveStaticFiles(req, res)
})


// app.get('/', (req: express.Request, res: express.Response) => {

//     res.sendFile(indexFile)
    
// })

app.listen(3000)

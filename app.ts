import express from 'express'
import path from 'path'
import fs from 'fs'
import serveStaticFiles from './src/lib/serveStaticFiles'
import serveApiCall from './src/lib/serveApiCall'
import middleware from './middleware'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
const app = express()

// req, res, next params
const cwd = process.cwd()

//makes folders inside static available to the client
app.use(express.static(path.join(cwd, 'src/static')))

app.use(bodyParser.urlencoded())

app.use(bodyParser.json())

app.use(cookieParser())


//intercepts requests from http://localhost:3000/api/*
app.post('/api/auth/*',  async (req: express.Request, res: express.Response) => {

    const response = await serveApiCall(req, res)
    
    response
})

app.use(middleware)

//intercepts routes
app.get('*', (req: express.Request, res: express.Response, next: express.NextFunction) => {
    if(req.path.includes('/api/')) {
        next()
    } else {
        serveStaticFiles(req, res, )
    }
})

app.listen(3000)

import express from 'express'
import path from 'path'
import fs from 'fs'
import serveStaticFiles from './src/lib/serveStaticFiles'
import serveApiCall from './src/lib/serveApiCall'
const app = express()

// req, res, next params
const cwd = process.cwd()

//app.use('/api/auth', (req:, res) => {})

//makes folders inside static available to the client
app.use(express.static(path.join(cwd, 'src/static')))

//intercepts requests from http://localhost:3000/api/*
app.get('/api/*',  (req: express.Request, res: express.Response) => {

    const response = serveApiCall(req, res)
    
    response
})

//intercepts routes
app.get('*', (req: express.Request, res: express.Response) => {
    serveStaticFiles(req, res, )
})

app.listen(3000)

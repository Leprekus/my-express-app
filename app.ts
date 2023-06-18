import express from 'express'
import { type Request, type Response } from 'express'
const app = express()

// req, res, next params
app.get('/', (req: Request, res: Response) => {
    res.render('index')
    
})

app.listen(3000)

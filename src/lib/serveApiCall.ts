import express from 'express'
import path from 'path'
import fs from 'fs'
import { CWD } from '../utils/consts';

export default async function serveApiCall ( req: express.Request, res: express.Response) {

    const filePath = CWD + '/src/pages/' + req.path
   
    try {

        const module = await import(filePath)

        const handler = await module.default || await module.handler
        
        const response: Response = await handler(req, res)

        return response


    } catch(Error) {

        return res.status(500).json({ Error })

    }


  }
import express from 'express'
import { ClientToken,  } from './src/typings'

const route = {
    exclude: ['/api', ],
    protect: ['/', ],
}

export default async function middleware( req: express.Request, res: express.Response, next: express.NextFunction) {

    const pathname = req.path

    if(route.exclude.some(path => path === pathname)) return next()
    
    const token:ClientToken =  req.cookies?.token
    
    if((!token || token?.expires_at < Date.now()) && route.protect.some(path => path === pathname)) {

       return res.redirect('/login')

    }



    return next()
}


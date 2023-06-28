import express from 'express'
import getUser from './src/lib/getUser'

const route = {
    exclude: ['/api', ],
    protect: ['/', ],
}

export default async function middleware( req: express.Request, res: express.Response, next: express.NextFunction) {

    const pathname = req.path

    if(route.exclude.some(path => path === pathname)) return next()
    
    const user =  getUser()
    
    if(!user && route.protect.some(path => path === pathname)) {

       return res.redirect('/login')

    }

    return next()
}


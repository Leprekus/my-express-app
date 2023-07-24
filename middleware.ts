import express from 'express'
import { ClientToken,  } from './src/typings'
import refreshToken from './src/utils/refreshToken'

const route = {
    exclude: ['/api', ],
    protect: ['/', ],
}

export default async function middleware( req: express.Request, res: express.Response, next: express.NextFunction) {

    const pathname = req.path

    if(route.exclude.some(path => path === pathname) || pathname === '/login' ) return next()
    
    let token:ClientToken =  req.cookies?.token

    
    if(token && token?.expires_at < Date.now()) {
        
        const HOUR_IN_MILISECONDS = 60 * 60 * 1000
        
        const newToken = refreshToken(token)


        if(!newToken.ok) console.log(newToken.status)
        else {
            token = ({
                ...newToken,
                expires_at: newToken.created_at! + HOUR_IN_MILISECONDS
            } as ClientToken)
        
    }
    }
    
    if((!token || token?.expires_at < Date.now()) && route.protect.some(path => pathname.includes(path))) {

       return res.redirect('/login')

    }



    return next()
}


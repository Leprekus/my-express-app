import express from 'express'
import { ClientToken,  } from './src/typings'
import refreshToken from './src/utils/refreshToken'
import setToken from './src/utils/setToken'

const route = {
    exclude: ['/api', ],
    protect: ['/', ],
}

export default async function middleware( req: express.Request, res: express.Response, next: express.NextFunction) {

    const pathname = req.path

    if(route.exclude.some(path => pathname.includes(path)) || pathname === '/login' ) return next()
    
    let token:ClientToken =  req.cookies?.token

    console.log({token})
    if(token && token?.expires_at < Date.now()) {
        
        const newToken = refreshToken(token)

        return newToken.ok ? (token = setToken(newToken, res, req), next()) : 
        res.status(token.status).json({ data: 'Failed to fetch token'})
        
        
        

    }
    
    if((!token || token?.expires_at < Date.now()) && route.protect.some(path => pathname.includes(path))) {

       return res.redirect('/login')

    }



    return next()
}


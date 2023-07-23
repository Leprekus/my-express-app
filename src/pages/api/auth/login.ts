import express from 'express'
import fetchToken from '../../../utils/fetchToken';
import { api } from '../../../../backend/main';
import { ICookieToken } from '../../../typings';

export const handler = async ( req: express.Request, res: express.Response ) => {
  
  
  // const cookieToken = req.cookies?.token
  // if(req.cookies?.token) return res.status(200).json({ token: cookieToken })
  
  // const token = await fetchToken()
  // const newCookieToken = res.cookie('token',token, { maxAge: 900000, httpOnly: true });
  
  // const { username, password } = req?.body
  // console.log(username, password)
  const { username, password } = req?.body

  const cookieToken:ICookieToken = req.cookies?.token || null

  if(!cookieToken) {

    const token = await fetchToken(username, password)

    res.cookie('token', token, { maxAge: 900000, httpOnly: true })
    
  }
  
  return cookieToken.ok ? res.redirect('/home') : 
  res.status(cookieToken.status).json({ data: 'Failed to retrieve token' })
}
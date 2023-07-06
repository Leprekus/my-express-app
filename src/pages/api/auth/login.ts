import express from 'express'
import fetchToken from '../../../utils/fetchToken';

export const handler = async ( req: express.Request, res: express.Response ) => {
  
  
  const cookieToken = req.cookies?.token
  if(req.cookies?.token) return res.status(200).json({ token: cookieToken })
  
  const token = await fetchToken()
  const newCookieToken = res.cookie('token',token, { maxAge: 900000, httpOnly: true });
  
  const { username, password } = req?.body
  console.log(username, password)

  return newCookieToken.status(200).json({ token })
}
import express from 'express'
import fetchToken from '../../../utils/fetchToken';
import { api } from '../../../../backend/main';

export const handler = async ( req: express.Request, res: express.Response ) => {
  
  
  // const cookieToken = req.cookies?.token
  // if(req.cookies?.token) return res.status(200).json({ token: cookieToken })
  
  // const token = await fetchToken()
  // const newCookieToken = res.cookie('token',token, { maxAge: 900000, httpOnly: true });
  
  // const { username, password } = req?.body
  // console.log(username, password)
  const { username, password } = req?.body

  const credentials = {
    client_id: process.env.CLIENT_ID!,
    client_secret: process.env.CLIENT_SECRET!
}
  const data = {
    username, password, client_credentials: credentials
  }

  const user = await api.signIn(data)

  console.log({ user })
 
  return res.status(200).json({ data: 'Login successful' })
}
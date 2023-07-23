import { api } from "../../backend/main"
import { IToken } from "../../backend/typings"
import { ICookieToken } from "../typings"

export default async function fetchToken(username: string, password: string):Promise<IToken> {
  const credentials = {
    client_id: process.env.CLIENT_ID!,
    client_secret: process.env.CLIENT_SECRET!
}
  
  const data = {
    username, password, client_credentials: credentials
  }

  const token = await api.signIn(data)

  return token
}
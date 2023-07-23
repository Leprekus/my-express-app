import { api } from "../../backend/main"

export default async function fetchToken(username: string, password: string) {
  const credentials = {
    client_id: process.env.CLIENT_ID!,
    client_secret: process.env.CLIENT_SECRET!
}
  
  const data = {
    username, password, client_credentials: credentials
  }

  const user = await api.signIn(data)

    return user
}
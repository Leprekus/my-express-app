import { api } from "../../backend/main";
import { IClientCredentials } from "../../backend/typings";
import { ClientToken } from "../typings";

export default function refreshToken(token: ClientToken) {
    const client_credentials:IClientCredentials = {
        client_id: process.env.CLIENT_ID!,
        client_secret: process.env.CLIENT_SECRET!
    }
    
    const newToken = api.refreshToken(client_credentials, token)
   
    return newToken

}
interface IResponse {
    ok: boolean;
    status: 401 | 500 | 200 | 404 | 409;
}
//remove password from here
interface User {
    username: string;
    password?: string;
}
interface UserPrivate {
    username: string;
    password: string;
}
export interface UserCall extends IResponse {
    user?: User;
}

export interface ErrnoException extends Error {
    errno?: number | undefined;
    code?: string | undefined;
    path?: string | undefined;
    syscall?: string | undefined;
 }

 export interface IClientCredentials{
    client_id: string,
    client_secret: string
} 


export interface IToken extends IResponse {
    access_token?: string;
    created_at?: number;
    user?: User
}
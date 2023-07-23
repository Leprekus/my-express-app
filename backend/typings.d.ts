export interface UserCall {
    user?: User;
    ok: boolean;
    status: 401 | 500 | 200 | 404;
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
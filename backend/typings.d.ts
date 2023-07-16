export interface UserCall {
    user?: User;
    ok: 401 | 500 | 200 | 404;
}

export interface ErrnoException extends Error {
    errno?: number | undefined;
    code?: string | undefined;
    path?: string | undefined;
    syscall?: string | undefined;
 }
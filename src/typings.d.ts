interface IResponse {
    ok: boolean;
    status: 401 | 500 | 200 | 404 | 409;
}


export interface ICookieToken extends IResponse {
    access_token: string,
    created_at: number,
    user: { username: string },
  }
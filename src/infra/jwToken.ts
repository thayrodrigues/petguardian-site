import jwt, { JwtPayload } from 'jsonwebtoken'

export const jwtData = (token: string) => {
  return jwt.decode(token) as JwtPayload
}

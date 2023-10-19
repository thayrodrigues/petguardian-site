import nookies from 'nookies'

const ACCESS_TOKEN_KEY = 'PETGUARDIAN_TK'

export const tokenStore = {
  save(token: string, ctx = null) {
    nookies.set(ctx, ACCESS_TOKEN_KEY, token, {
      maxAge: 86400, // 24 hours
      path: '/',
    })
  },
  delete(ctx = null) {
    nookies.destroy(ctx, ACCESS_TOKEN_KEY)
  },
}

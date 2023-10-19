import { AxiosError } from 'axios'
import { api } from '@/infra/axios.conf'
import { AuthLogin } from '@/types/authTypes'
import { tokenStore } from '@/infra/nookies'

export const AuthService = {
  login: async (bodyData: AuthLogin) => {
    try {
      const { data } = await api.post('/login', bodyData)
      tokenStore.save(data.token)
      return data
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 404) {
          throw new Error('Usuário não cadastrado, faça seu cadastro')
        }
        if (error.response?.status === 401) {
          throw new Error('E-mail e/ou senha incorreta, tente novamente')
        }
      }
      throw new Error(
        'Ocorreu um erro ao acessar o sistema, tente novamente mais tarde',
      )
    }
  },
}

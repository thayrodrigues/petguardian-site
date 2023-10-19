import { AxiosError } from 'axios'
import { api } from '@/infra/axios.conf'
import { AuthLogin, AuthRegister } from '@/types/authTypes'
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

  register: async (bodyData: AuthRegister) => {
    // limpa a string de cpf
    bodyData.cpf = bodyData.cpf.replace(/\D/g, '')

    // limpa a string de telefone 1
    bodyData.phoneNumber1 = bodyData.phoneNumber1.replace(/\D/g, '')

    // limpa a string de telefone 2
    bodyData.phoneNumber2 = bodyData.phoneNumber2.replace(/\D/g, '')

    // envia os dados para a api
    try {
      await api.post('/users', bodyData)
      return true
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 409) {
          throw new Error('Usuário já cadastrado, faça seu login')
        }
      }
      throw new Error(
        'Ocorreu um erro ao acessar o sistema, tente novamente mais tarde',
      )
    }
  },
}

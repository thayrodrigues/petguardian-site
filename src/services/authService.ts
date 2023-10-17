import { api } from '@/infra/axios.conf'
import { AuthLogin } from '@/types/authTypes'

export const AuthService = {
  login: async (bodyData: AuthLogin) => {
    const { data } = await api.post('/login', bodyData)
    return data
  },
}

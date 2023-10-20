import { api } from '@/infra/axios.conf'
import { UpdateUser, User } from '@/types/usersTypes'

export const userService = {
  getUser: async (id: string, token: string): Promise<User[]> => {
    try {
      const { data } = await api.get(`/users?userId=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      return data
    } catch (error: any) {
      throw new Error(error.response.data.message)
    }
  },

  updateUser: async (id: string, token: string, user: UpdateUser) => {
    // Verifica se a senha foi alterada e se as senhas coincidem
    if (user.password && user.password !== user.password2) {
      throw new Error('As senhas não coincidem')
    }

    // Remove a senha do objeto caso ela não tenha sido alterada
    if (!user.password) {
      delete user.password
    }
    delete user.password2

    try {
      await api.put(`/users/${id}`, user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    } catch (error: any) {
      if (error.response.status === 403) {
        throw new Error('Você não tem permissão para alterar este usuário')
      }
      throw new Error(error.response.data.message)
    }
  },
}

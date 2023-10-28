import { api } from '@/infra/axios.conf'
import { PetsProps } from '@/types/petsTypes'

export const petServices = {
  getPets: async (
    token: string,
    cep: string,
    category?: string,
  ): Promise<PetsProps[]> => {
    let url = `/pets/location/${cep}`

    if (category) {
      url += `?category=${category}`
    }

    const { data } = await api.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  },

  getPetsByUser: async (
    token: string,
    userId: string,
  ): Promise<PetsProps[]> => {
    const { data } = await api.get(`/pets?userID=${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  },
}

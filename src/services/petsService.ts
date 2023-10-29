import { api } from '@/infra/axios.conf'
import { PetsProps, PetsRegisterForm } from '@/types/petsTypes'
import { SendingImages } from '@/utils/sendingImages'

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

  registerPet: async (data: PetsRegisterForm, token: string) => {
    if (data.photo && data.photo.length > 0) {
      const fileData = data.photo.item(0)
      const response = await SendingImages.Send(fileData, data.name, token)
      delete data.photo
      data.photoUrl = [response.url]
    } else {
      delete data.photo
    }

    try {
      const resp = await api.post('/pets', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      return resp
    } catch (error: any) {
      if (error.request.status === 400) {
        throw new Error('Erro ao buscar o cep informado na API')
      }
      throw new Error(error.response.data.message || error.message)
    }
  },
}

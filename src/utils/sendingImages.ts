import { api } from '@/infra/axios.conf'

const getFileExtension = (filename: string) => {
  const parts = filename.split('.')
  if (parts.length > 1) {
    return parts[parts.length - 1]
  }
  return ''
}

export const SendingImages = {
  IsImage: (fileData: File) => {
    // tipos de arquivos permitidos
    const mimeTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp']

    // verifica se o arquivo é uma imagem
    if (mimeTypes.indexOf(fileData.type) === -1) {
      return false
    }

    // Obtém a extensão do arquivo com base no nome do arquivo
    const extension = getFileExtension(fileData.name)
    return extension.toLowerCase()
  },

  Send: async (fileData: File, name: string, token: string) => {
    // valida se o arquivo é uma imagem
    const extension = SendingImages.IsImage(fileData)

    // trata o nome e concatena com a data atual
    const petName = name.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()
    const filename = `${petName}-${Date.now()}`

    // muda o nome do arquivo para o nome do pet
    const file = new File([fileData], `${filename}.${extension}`, {
      type: fileData.type,
    })

    // cria um formData para enviar o arquivo
    const formData = new FormData()
    formData.append('file', file)

    // envia o arquivo para o Storage
    try {
      await api.post('/storage/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      })

      return {
        url: `https://storage.googleapis.com/petguardian-d3db6.appspot.com/${filename}.${extension}`,
      }
    } catch (error) {
      throw new Error('Erro ao enviar a imagem para o Storage')
    }
  },
}

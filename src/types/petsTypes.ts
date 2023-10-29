export interface PetsHook {
  token: string
  cep?: string
}

export interface PetsProps {
  id: string
  name: string
  age: number
  breed: string
  category: string
  qualities: string[]
  animalSize: string
  description: string
  photoUrl: string
  cep: string
  distance: number
  userId: string
}

export interface PetsRegisterForm {
  name: string
  age: number
  breed: string
  category: string
  qualities: string[]
  animalSize?: string
  description?: string
  photo?: any
  photoUrl?: string[]
  cep: string
  userId: string
}

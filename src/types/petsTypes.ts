export interface PetsHook {
  token: string
  cep?: string
}

export interface OwnerProps {
  userId: number
  name: string
  email: string
  phoneNumber1: string
  phoneNumber2: string
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
  owner: OwnerProps
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

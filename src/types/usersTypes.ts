export interface User {
  userId: string
  name: string
  email: string
  cpf: string
  birthDate: string
  phoneNumber1: string
  phoneNumber2: string
}

export interface UpdateUser {
  name: string
  email: string
  cpf: string
  birthDate: string
  phoneNumber1: string
  phoneNumber2: string
  password?: string
  password2?: string
}

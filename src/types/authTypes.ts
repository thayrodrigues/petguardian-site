export interface AuthLogin {
  email: string
  password: string
}

export interface AuthRegister {
  name: string
  email: string
  birthDate: string
  cpf: string
  phoneNumber1: string
  phoneNumber2: string
  password: string
  password2?: string
}

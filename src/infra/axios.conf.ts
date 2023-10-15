import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://petguardianapi.franklindrw.com',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 1000 * 30, // 30 seconds
})

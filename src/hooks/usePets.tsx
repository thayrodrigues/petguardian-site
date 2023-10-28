import { petServices } from '@/services/petsService'
import { PetsHook, PetsProps } from '@/types/petsTypes'
import { useEffect, useState } from 'react'

export default function usePets({ token, cep }: PetsHook) {
  const [pets, setPets] = useState<PetsProps[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!token || !cep) return
    const fetchPets = async () => {
      setLoading(true)
      try {
        const data = await petServices.getPets(token, cep)
        setPets(data)
      } catch (error: any) {
        setError(error)
      }
      setLoading(false)
    }

    fetchPets()
  }, [token, cep])

  return { pets, loading, error }
}

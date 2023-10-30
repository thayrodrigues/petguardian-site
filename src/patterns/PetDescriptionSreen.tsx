'use client'

import { useState } from 'react'
import BackNavButton from '@/components/backNavButton'
import { PetsProps } from '@/types/petsTypes'
import { Button, Flex, useToast } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { PenSquare, Trash, X } from 'lucide-react'
import { petServices } from '@/services/petsService'
import PetInfo from '@/components/PetInfo'
import EditPetForm from '@/components/EditPetForm'

export default function PetDescriptionSreen({
  pet,
  owner,
  token,
}: {
  pet: PetsProps
  owner: boolean
  token: string
}) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [edit, setEdit] = useState(false)
  const router = useRouter()
  const toast = useToast()

  const deletePet = async () => {
    setIsSubmitting(true)
    try {
      await petServices.deletePet(token, pet.id)
      toast({
        title: 'Pet excluído com sucesso',
        status: 'success',
        position: 'top-right',
        duration: 3000,
        isClosable: true,
      })
      setIsSubmitting(false)
      router.back()
    } catch (error: any) {
      toast({
        title: 'Erro ao excluir pet',
        description: 'Tente novamente mais tarde',
        status: 'error',
        position: 'top-right',
        duration: 3000,
        isClosable: true,
      })
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Flex maxW="1200px" my={6} mx="auto" px={6}>
        <BackNavButton />
      </Flex>
      {owner && !edit && (
        <Flex w="full" maxW="1200px" gap={4} justify="end" mx="auto" px={6}>
          <Button
            colorScheme="orange"
            leftIcon={<PenSquare size={18} />}
            isLoading={isSubmitting}
            onClick={() => setEdit(true)}
          >
            Editar
          </Button>
          <Button
            colorScheme="red"
            leftIcon={<Trash size={18} />}
            isLoading={isSubmitting}
            onClick={deletePet}
          >
            Excluir
          </Button>
        </Flex>
      )}
      {owner && edit && (
        <Flex w="full" maxW="1200px" gap={4} justify="end" mx="auto" px={6}>
          <Button
            colorScheme="red"
            leftIcon={<X size={18} />}
            isLoading={isSubmitting}
            onClick={() => setEdit(false)}
          >
            Cancelar
          </Button>
        </Flex>
      )}
      {!edit ? (
        <PetInfo pet={pet} owner={owner} />
      ) : (
        <EditPetForm pet={pet} token={token} />
      )}
    </>
  )
}

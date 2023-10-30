'use client'

import {
  Flex,
  Heading,
  Button,
  Input,
  Select,
  Checkbox,
  Textarea,
  FormControl,
  FormLabel,
  Container,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react'

import BackNavButton from './backNavButton'
import { useForm } from 'react-hook-form'
import { PetsRegisterForm } from '@/types/petsTypes'
import { useState } from 'react'
import { petServices } from '@/services/petsService'
import { useRouter } from 'next/navigation'

export default function PetRegister({
  token,
  userId,
}: {
  token: string
  userId: string
}) {
  const [qualities, setQualities] = useState<string[]>([])
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PetsRegisterForm>()
  const toast = useToast()
  const router = useRouter()

  const handleQualities = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setQualities([...qualities, e.target.value])
    } else {
      setQualities(qualities.filter((quality) => quality !== e.target.value))
    }
  }

  const registerPet = async (data: PetsRegisterForm) => {
    if (qualities.length > 0) {
      data.qualities = qualities
    }
    data.age = Number(data.age)
    data.userId = userId

    try {
      await petServices.registerPet(data, token)
      toast({
        title: 'Pet cadastrado com sucesso!',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      router.push('/meus-pets')
    } catch (error: any) {
      toast({
        title: 'Erro ao cadastrar Pet',
        description: error.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
      console.log(error)
    }
  }

  return (
    <>
      <Flex maxW="1200px" my={6} mx="auto" px={6}>
        <BackNavButton />
      </Flex>
      <Container px={5} py={6} bg="white">
        <Heading mb={4} textAlign="center" color="#12327C">
          Cadastro de Pet
        </Heading>

        <form onSubmit={handleSubmit(registerPet)}>
          <Flex my={4} justifyContent="space-between" gap={6}>
            <FormControl
              isInvalid={errors.name && errors.name.message === 'string'}
            >
              <FormLabel color="#12327C">Nome do Pet:</FormLabel>
              <Input
                type="text"
                placeholder="Digite o nome do pet"
                {...register('name', {
                  required: 'Este campo é obrigatório',
                  minLength: {
                    value: 3,
                    message: 'Este campo deve conter no mínimo 3 caracteres',
                  },
                })}
              />
              <FormErrorMessage>
                {errors.name && typeof errors.name.message === 'string' && (
                  <div>{errors.name.message}</div>
                )}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={errors.breed && errors.breed.message === 'string'}
            >
              <FormLabel color="#12327C">Raça:</FormLabel>
              <Input
                type="text"
                placeholder="Digite a raça"
                {...register('breed', {
                  required: 'Este campo é obrigatório',
                  minLength: {
                    value: 3,
                    message: 'Este campo deve conter no mínimo 3 caracteres',
                  },
                })}
              />
              <FormErrorMessage>
                {errors.breed && typeof errors.breed.message === 'string' && (
                  <div>{errors.breed.message}</div>
                )}
              </FormErrorMessage>
            </FormControl>
          </Flex>

          <Flex mb={4} justifyContent="space-between">
            <FormControl
              width="48%"
              isInvalid={
                errors.category && errors.category.message === 'string'
              }
            >
              <FormLabel color="#12327C">Categoria:</FormLabel>
              <Select {...register('category')}>
                <option value="cão">Cachorro</option>
                <option value="gato">Gato</option>
                <option value="roedor">Roedor</option>
                <option value="ave">Pássaro</option>
                <option value="outro">Outro</option>
              </Select>
              <FormErrorMessage>
                {errors.category &&
                  typeof errors.category.message === 'string' && (
                    <div>{errors.category.message}</div>
                  )}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              width="48%"
              isInvalid={errors.age && errors.age.message === 'string'}
            >
              <FormLabel color="#12327C">Idade:</FormLabel>
              <Input
                type="number"
                placeholder="Digite a idade"
                {...register('age', {
                  required: 'Este campo é obrigatório',
                  min: {
                    value: 0,
                    message: 'Este campo deve ser maior que 0',
                  },
                })}
              />
              <FormErrorMessage>
                {errors.age && typeof errors.age.message === 'string' && (
                  <div>{errors.age.message}</div>
                )}
              </FormErrorMessage>
            </FormControl>
          </Flex>

          <FormControl mb={4}>
            <FormLabel color="#12327C">Selecione as qualidades:</FormLabel>
            <Flex wrap="wrap" gap={4}>
              <Checkbox value="Calmo" onChange={handleQualities}>
                Calmo
              </Checkbox>
              <Checkbox value="Ativo" onChange={handleQualities}>
                Ativo
              </Checkbox>
              <Checkbox value="Carinhoso" onChange={handleQualities}>
                Carinhoso
              </Checkbox>
              <Checkbox value="Educado" onChange={handleQualities}>
                Educado
              </Checkbox>
              <Checkbox value="Brincalhão" onChange={handleQualities}>
                Brincalhão
              </Checkbox>
              <Checkbox value="Esperto" onChange={handleQualities}>
                Esperto
              </Checkbox>
            </Flex>
          </FormControl>

          <Flex mb={4} justifyContent="space-between" gap={6}>
            <FormControl w="2xs">
              <FormLabel color="#12327C">Porte:</FormLabel>
              <Select {...register('animalSize')}>
                <option value="Pequeno">Pequeno</option>
                <option value="Médio">Médio</option>
                <option value="Grande">Grande</option>
              </Select>
            </FormControl>

            <FormControl
              w="2xs"
              isInvalid={errors.cep && typeof errors.cep.message === 'string'}
            >
              <FormLabel color="#12327C">CEP:</FormLabel>
              <Input
                type="text"
                placeholder="Digite o CEP"
                {...register('cep', {
                  required: 'Este campo é obrigatório',
                  minLength: {
                    value: 8,
                    message: 'Este campo deve conter 8 caracteres',
                  },
                })}
              />
              <FormErrorMessage>
                {errors.cep && typeof errors.cep.message === 'string' && (
                  <div>{errors.cep.message}</div>
                )}
              </FormErrorMessage>
            </FormControl>
          </Flex>

          <FormControl mb={4}>
            <FormLabel color="#12327C">Descrição:</FormLabel>
            <Textarea
              rows={5}
              placeholder="Descreva o Pet"
              {...register('description')}
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel color="#12327C">Foto:</FormLabel>
            <Input type="file" {...register('photo')} />
          </FormControl>
          <Button
            type="submit"
            colorScheme="blue"
            width="100%"
            isLoading={isSubmitting}
          >
            Cadastrar
          </Button>
        </form>
      </Container>
    </>
  )
}

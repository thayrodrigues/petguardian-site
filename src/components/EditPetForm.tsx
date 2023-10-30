import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { PetsProps } from '@/types/petsTypes'
import {
  Avatar,
  Button,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  useToast,
} from '@chakra-ui/react'
import { petServices } from '@/services/petsService'
import { useRouter } from 'next/navigation'

export default function EditPetForm({
  pet,
  token,
}: {
  pet: PetsProps
  token: string
}) {
  const [qualities, setQualities] = useState<string[]>([...pet.qualities])
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<any>()
  const toast = useToast()
  const router = useRouter()

  const savePet = async (data: any) => {
    // valida se o usuário selecionou alguma qualidade
    if (qualities.length > 0) {
      data.qualities = qualities
    } else {
      delete data.qualities
    }

    data.age = Number(data.age)
    try {
      await petServices.updatePet(data, token, pet.id)
      toast({
        title: 'Pet atualizado com sucesso',
        status: 'success',
        duration: 3000,
        isClosable: true,
      })
      router.push(`/pet/${pet.id}`)
    } catch (error: any) {
      console.log(error)
      toast({
        title: 'Erro ao atualizar o pet',
        description: 'Tente novamente',
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  const handleQualities = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setQualities([...qualities, e.target.value])
    } else {
      setQualities(qualities.filter((quality) => quality !== e.target.value))
    }
  }

  const handleCheckbox = (quality: string) => {
    if (qualities.includes(quality)) {
      return true
    } else {
      return false
    }
  }

  return (
    <Container bg="white" p={4}>
      <Heading as="h2" fontSize="2xl" color="#12327C" my={8}>
        Editar
      </Heading>
      <form onSubmit={handleSubmit(savePet)}>
        <Flex w="full" direction="column" align="center" mb={6}>
          <Avatar name={pet.name} src={pet.photoUrl} size="xl" />
          <FormControl>
            <FormLabel color="#12327C">Nova Foto:</FormLabel>
            <input
              type="file"
              placeholder="Selecione uma nova foto"
              {...register('photo')}
            />
          </FormControl>
        </Flex>
        <Flex w="full" justify="space-between" gap={6} mb={4}>
          <FormControl
            isInvalid={errors.name && errors.name.message === 'string'}
          >
            <FormLabel color="#12327C">Nome do Pet:</FormLabel>
            <Input
              type="text"
              placeholder="Digite o nome do pet"
              defaultValue={pet.name}
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
            w="60%"
            isInvalid={errors.breed && errors.breed.message === 'string'}
          >
            <FormLabel color="#12327C">Raça:</FormLabel>
            <Input
              type="text"
              placeholder="Digite a raça"
              defaultValue={pet.breed}
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

        <Flex mb={4} justifyContent="space-between" gap={6}>
          <FormControl
            isInvalid={errors.category && errors.category.message === 'string'}
          >
            <FormLabel color="#12327C">Categoria:</FormLabel>
            <Select {...register('category')} defaultValue={pet.category}>
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
            isInvalid={errors.age && errors.age.message === 'string'}
          >
            <FormLabel color="#12327C">Idade:</FormLabel>
            <Input
              type="number"
              placeholder="Digite a idade"
              defaultValue={pet.age}
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
            <Checkbox
              value="Calmo"
              onChange={handleQualities}
              isChecked={handleCheckbox('Calmo')}
            >
              Calmo
            </Checkbox>
            <Checkbox
              value="Ativo"
              onChange={handleQualities}
              isChecked={handleCheckbox('Ativo')}
            >
              Ativo
            </Checkbox>
            <Checkbox
              value="Carinhoso"
              onChange={handleQualities}
              isChecked={handleCheckbox('Carinhoso')}
            >
              Carinhoso
            </Checkbox>
            <Checkbox
              value="Educado"
              onChange={handleQualities}
              isChecked={handleCheckbox('Educado')}
            >
              Educado
            </Checkbox>
            <Checkbox
              value="Brincalhão"
              onChange={handleQualities}
              isChecked={handleCheckbox('Brincalhão')}
            >
              Brincalhão
            </Checkbox>
            <Checkbox
              value="Esperto"
              onChange={handleQualities}
              isChecked={handleCheckbox('Esperto')}
            >
              Esperto
            </Checkbox>
          </Flex>
        </FormControl>

        <Flex mb={4} justifyContent="space-between" gap={6}>
          <FormControl w="2xs">
            <FormLabel color="#12327C">Porte:</FormLabel>
            <Select {...register('animalSize')} defaultValue={pet.animalSize}>
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
              defaultValue={pet.cep}
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
            defaultValue={pet.description}
            {...register('description')}
          />
        </FormControl>

        <Button
          type="submit"
          colorScheme="blue"
          width="100%"
          isLoading={isSubmitting}
        >
          Salvar
        </Button>
      </form>
    </Container>
  )
}

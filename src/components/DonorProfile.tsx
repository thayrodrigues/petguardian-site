'use client'
import { useState } from 'react'
import {
  Flex,
  Heading,
  Button,
  Input,
  Avatar,
  Text,
  FormControl,
  FormLabel,
  Container,
  FormErrorMessage,
  InputRightElement,
  IconButton,
  InputGroup,
  useToast,
} from '@chakra-ui/react'

import { UpdateUser, User } from '@/types/usersTypes'
import BackNavButton from './backNavButton'
import { useForm } from 'react-hook-form'
import { Eye, EyeOff } from 'lucide-react'
import { formatData } from '@/utils/formatData'
import { userService } from '@/services/userService'

export default function DonorProfile({
  data,
  token,
}: {
  data: User
  token: string
}) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<UpdateUser>()
  const toast = useToast()

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleUpdate = async (body: UpdateUser) => {
    try {
      await userService.updateUser(data.userId, token, body)
      toast({
        title: 'Perfil atualizado com sucesso!',
        status: 'success',
        position: 'top-right',
        duration: 3000,
        isClosable: true,
      })
    } catch (error: any) {
      toast({
        title: 'Erro ao atualizar perfil',
        description: error.message,
        status: 'error',
        position: 'top-right',
        duration: 3000,
        isClosable: true,
      })
    }
  }

  const handleShowPassword = () => setShowPassword(!showPassword)

  const handleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword)

  return (
    <Container px={5} py={6} bg="white">
      <Flex justifyContent="space-between" alignItems="center" mb={5}>
        <BackNavButton />
      </Flex>
      <Heading fontSize="20px" mb={4} textAlign="center" color="#12327C">
        Meu Perfil
      </Heading>
      <Text fontFamily="Poppins" mb={4} textAlign="center" color="#12327C">
        Esse é o perfil que será visualizado por cuidadores responsáveis ou
        organizações não governamentais que recebem sua mensagem.
      </Text>
      <Flex justifyContent="center" mb={4}>
        <Avatar
          size="lg"
          w="64px"
          h="64px"
          name={data.name}
          bg="blue.300"
          color="#000000"
        />
      </Flex>
      <form onSubmit={handleSubmit(handleUpdate)}>
        <FormControl
          mt={4}
          isInvalid={errors.name && typeof errors.name.message === 'string'}
        >
          <FormLabel>Nome e Sobrenome:</FormLabel>
          <Input
            type="text"
            placeholder="Digite seu nome"
            defaultValue={data.name}
            {...register('name', {
              required: 'Este campo é obrigatório',
              minLength: {
                value: 5,
                message: 'Este campo deve ter no mínimo 5 caracteres',
              },
            })}
          />
          <FormErrorMessage>
            {errors.name && typeof errors.name.message === 'string' && (
              <span>{errors.name.message}</span>
            )}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          mt={4}
          isInvalid={errors.email && typeof errors.email.message === 'string'}
        >
          <FormLabel>E-mail:</FormLabel>
          <Input
            type="email"
            placeholder="Digite seu E-mail"
            defaultValue={data.email}
            {...register('email', {
              required: 'Este campo é obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'E-mail inválido',
              },
            })}
          />
          <FormErrorMessage>
            {errors.email && typeof errors.email.message === 'string' && (
              <div>{errors.email.message}</div>
            )}
          </FormErrorMessage>
        </FormControl>

        <Flex w="full" justify="space-between" gap={6}>
          <FormControl
            mt={4}
            isInvalid={errors.cpf && typeof errors.cpf.message === 'string'}
          >
            <FormLabel>CPF:</FormLabel>
            <Input
              type="text"
              placeholder="xxx.xxx.xxx-xx"
              defaultValue={data.cpf}
              {...register('cpf', {
                required: 'Este campo é obrigatório',
              })}
            />
            <FormErrorMessage>
              {errors.cpf && typeof errors.cpf.message === 'string' && (
                <div>{errors.cpf.message}</div>
              )}
            </FormErrorMessage>
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Data de Nascimento</FormLabel>
            <Input
              type="date"
              defaultValue={formatData.inputDate(data.birthDate)}
              {...register('birthDate', {
                required: 'Este campo é obrigatório',
              })}
            />
          </FormControl>
        </Flex>

        <Flex w="full" justify="space-between" gap={6}>
          <FormControl
            isInvalid={
              errors.phoneNumber1 &&
              typeof errors.phoneNumber1.message === 'string'
            }
          >
            <FormLabel mt={4}>Telefone(1):</FormLabel>
            <Input
              type="text"
              placeholder="(xx) 9xxxx-xxxx"
              defaultValue={data.phoneNumber1}
              {...register('phoneNumber1', {
                required: 'Este campo é obrigatório',
              })}
            />
            <FormErrorMessage>
              {errors.phoneNumber1 &&
                typeof errors.phoneNumber1.message === 'string' && (
                  <div>{errors.phoneNumber1.message}</div>
                )}
            </FormErrorMessage>
          </FormControl>

          <FormControl
            isInvalid={
              errors.phoneNumber2 &&
              typeof errors.phoneNumber2.message === 'string'
            }
          >
            <FormLabel mt={4}>Telefone(2):</FormLabel>
            <Input
              type="text"
              placeholder="(xx) 9xxxx-xxxx"
              defaultValue={data.phoneNumber2}
              {...register('phoneNumber2', {
                required: 'Este campo é obrigatório',
              })}
            />
            <FormErrorMessage>
              {errors.phoneNumber2 &&
                typeof errors.phoneNumber2.message === 'string' && (
                  <div>{errors.phoneNumber2.message}</div>
                )}
            </FormErrorMessage>
          </FormControl>
        </Flex>

        <Flex w="full" justify="space-between" gap={6}>
          <FormControl
            isInvalid={
              errors.password && typeof errors.password.message === 'string'
            }
          >
            <FormLabel mt={4}>Senha:</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Digite sua senha"
                {...register('password', {
                  minLength: {
                    value: 6,
                    message: 'Este campo deve ter no mínimo 6 caracteres',
                  },
                })}
              />
              <InputRightElement>
                <IconButton
                  variant="unstyled"
                  aria-label="Mostrar senha"
                  icon={showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                  onClick={handleShowPassword}
                />
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>
              {errors.password &&
                typeof errors.password.message === 'string' && (
                  <div>{errors.password.message}</div>
                )}
            </FormErrorMessage>
          </FormControl>

          <FormControl
            isInvalid={
              errors.password2 && typeof errors.password2.message === 'string'
            }
          >
            <FormLabel mt={4}>Confirmar senha:</FormLabel>
            <InputGroup>
              <Input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="Confirme a senha"
                {...register('password2', {
                  minLength: {
                    value: 6,
                    message: 'Este campo deve ter no mínimo 6 caracteres',
                  },
                })}
              />
              <InputRightElement>
                <IconButton
                  variant="unstyled"
                  aria-label="Mostrar senha"
                  icon={
                    showConfirmPassword ? (
                      <Eye size={18} />
                    ) : (
                      <EyeOff size={18} />
                    )
                  }
                  onClick={handleShowConfirmPassword}
                />
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>
              {errors.password2 &&
                typeof errors.password2.message === 'string' && (
                  <div>{errors.password2.message}</div>
                )}
            </FormErrorMessage>
          </FormControl>
        </Flex>
        <Button
          type="submit"
          colorScheme="blue"
          width="100%"
          mt={4}
          isLoading={isSubmitting}
        >
          Salvar
        </Button>
      </form>
    </Container>
  )
}

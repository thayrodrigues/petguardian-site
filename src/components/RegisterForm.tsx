import { useState } from 'react'
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  IconButton,
  InputGroup,
  FormErrorMessage,
} from '@chakra-ui/react'
import { Eye, EyeOff } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { AuthRegister } from '@/types/authTypes'

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<AuthRegister>()

  // faz a verificação se a senha está sendo mostrada ou não
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const handleShowPassword = () => setShowPassword(!showPassword)

  const handleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword)

  const registerUser = (data: AuthRegister) => {
    console.log(data)
  }

  return (
    <Flex
      as="form"
      w="full"
      maxW="sm"
      my={4}
      mx="auto"
      direction="column"
      align="center"
    >
      <FormControl>
        <FormLabel>Nome e Sobrenome:</FormLabel>
        <Input
          type="text"
          placeholder="Digite seu nome"
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
      <FormControl>
        <FormLabel mt={4}>Telefone:</FormLabel>
        <Input type="text" placeholder="(xx) 9xxxx-xxxx" required />
      </FormControl>
      <FormControl>
        <FormLabel mt={4}>Senha:</FormLabel>
        <Input type="password" placeholder="Digite sua senha" required />
      </FormControl>
      <FormControl>
        <FormLabel mt={4}>Confirmar senha:</FormLabel>
        <Input type="password" placeholder="Confirme a senha" required />
      </FormControl>
      <Button type="submit" colorScheme="blue" w="80%" mt={8}>
        Cadastre-se
      </Button>
    </Flex>
  )
}

import { useState } from 'react'
import {
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  IconButton,
  InputGroup,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react'
import { Eye, EyeOff } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { AuthRegister } from '@/types/authTypes'
import { AuthService } from '@/services/authService'
import { useRouter } from 'next/navigation'

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<AuthRegister>()

  // faz a verificação se a senha está sendo mostrada ou não
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const toast = useToast()
  const router = useRouter()

  const handleShowPassword = () => setShowPassword(!showPassword)

  const handleShowConfirmPassword = () =>
    setShowConfirmPassword(!showConfirmPassword)

  const registerUser = async (data: AuthRegister) => {
    // valida se as senhas são iguais
    if (data.password !== data.password2) {
      console.log('Senhas não coincidem')
      toast({
        title: 'Erro ao cadastrar',
        description: 'Senhas não coincidem',
        position: 'top-right',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }

    delete data.password2

    try {
      await AuthService.register(data)
      toast({
        title: 'Cadastro realizado',
        description: 'Usuário cadastrado com sucesso',
        position: 'top-right',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      router.push('/')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast({
        title: 'Erro ao cadastrar',
        description: error.message,
        position: 'top-right',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  }

  return (
    <Flex
      as="form"
      w="full"
      maxW="500px"
      my={8}
      direction="column"
      align="center"
      onSubmit={handleSubmit(registerUser)}
    >
      <Flex w="full" justify="space-between" gap={6}>
        <FormControl
          mt={4}
          isInvalid={errors.cpf && typeof errors.cpf.message === 'string'}
        >
          <FormLabel>CPF:</FormLabel>
          <Input
            type="text"
            placeholder="xxx.xxx.xxx-xx"
            {...register('cpf', {
              required: 'Este campo é obrigatório',
              pattern: {
                value: /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/,
                message: 'CPF inválido',
              },
            })}
          />
          <FormErrorMessage>
            {errors.cpf && typeof errors.cpf.message === 'string' && (
              <div>{errors.cpf.message}</div>
            )}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          mt={4}
          isInvalid={errors.cpf && typeof errors.cpf.message === 'string'}
        >
          <FormLabel>Data de Nascimento</FormLabel>
          <Input
            type="date"
            {...register('birthDate', {
              required: 'Este campo é obrigatório',
            })}
          />
        </FormControl>
      </Flex>

      <FormControl
        mt={4}
        isInvalid={errors.name && typeof errors.name.message === 'string'}
      >
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
            {...register('phoneNumber1', {
              required: 'Este campo é obrigatório',
              pattern: {
                value: /^\([0-9]{2}\) [0-9]{5}-[0-9]{4}$/,
                message: 'Telefone inválido',
              },
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
            {...register('phoneNumber2', {
              required: 'Este campo é obrigatório',
              pattern: {
                value: /^\([0-9]{2}\) [0-9]{5}-[0-9]{4}$/,
                message: 'Telefone inválido',
              },
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
                required: 'Este campo é obrigatório',
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
            {errors.password && typeof errors.password.message === 'string' && (
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
                required: 'Este campo é obrigatório',
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
                  showConfirmPassword ? <Eye size={18} /> : <EyeOff size={18} />
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
        w="80%"
        mt={6}
        isLoading={isSubmitting}
      >
        Cadastre-se
      </Button>
    </Flex>
  )
}

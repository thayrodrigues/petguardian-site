import {
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  useToast,
} from '@chakra-ui/react'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AuthLogin } from '@/types/authTypes'
import { AuthService } from '@/services/authService'

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<AuthLogin>()
  const toast = useToast()

  const onSubmit = async (data: AuthLogin) => {
    try {
      const response = await AuthService.login(data)
      console.log(response)
    } catch (error: any) {
      toast({
        title: 'Erro ao fazer login',
        description: error.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  }

  const handleShowPassword = () => setShowPassword(!showPassword)

  return (
    <Flex
      as="form"
      w="full"
      maxW="sm"
      my={4}
      mx="auto"
      direction="column"
      align="center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl>
        <FormLabel>E-mail</FormLabel>
        <Input
          type="email"
          placeholder="Digite seu e-mail"
          required
          {...register('email')}
        />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Senha</FormLabel>
        <InputGroup>
          <InputRightElement>
            <IconButton
              variant="unstyled"
              aria-label="Mostrar senha"
              icon={showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              onClick={handleShowPassword}
            />
          </InputRightElement>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Digite sua senha"
            required
            {...register('password')}
          />
        </InputGroup>
      </FormControl>
      <Button
        type="submit"
        colorScheme="blue"
        w="80%"
        mt={4}
        isLoading={isSubmitting}
      >
        Entrar
      </Button>
    </Flex>
  )
}

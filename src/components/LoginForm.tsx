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
import { useRouter } from 'next/navigation'

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<AuthLogin>()
  const toast = useToast()
  const router = useRouter()

  const onSubmit = async (data: AuthLogin) => {
    try {
      await AuthService.login(data)
      router.push('/home')
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast({
        title: 'Erro ao fazer login',
        description: error.message,
        position: 'top-right',
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
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Digite sua senha"
            required
            {...register('password')}
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

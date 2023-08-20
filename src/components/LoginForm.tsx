import { Flex, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'

export default function LoginForm() {
  return (
    <Flex as="form" w="full" my={4} direction="column" align="center">
      <FormControl>
        <FormLabel>E-mail</FormLabel>
        <Input type="email" placeholder="Digite seu e-mail" required />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>Senha</FormLabel>
        <Input type="password" placeholder="Digite sua senha" required />
      </FormControl>
      <Button type="submit" colorScheme="blue" w="80%" mt={4}>
        Entrar
      </Button>
    </Flex>
  )
}

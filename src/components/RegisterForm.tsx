import { Flex, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'

export default function RegisterForm() {
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
        <Input type="text" placeholder="Digite seu nome" required />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>CPF:</FormLabel>
        <Input type="text" placeholder="Digite seu CPF" required />
      </FormControl>
      <FormControl mt={4}>
        <FormLabel>E-mail:</FormLabel>
        <Input type="email" placeholder="Digite seu E-mail" required />
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

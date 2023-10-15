import {
  Box,
  Input,
  Image,
  Button,
  Text,
  VStack,
  FormLabel,
  FormControl,
} from '@chakra-ui/react'

export default function LoginIpad() {
  return (
    <Box
      bg="blue.500"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box bg="white" p={8} borderRadius="lg" boxShadow="lg">
        <VStack spacing={4}>
          <Box textAlign="center">
            <Image src="./Logomarca.png" alt="Logomarca" />
            <Text fontSize="32px" fontWeight="bold" color="#12327C">
              Bem vindo!
            </Text>
          </Box>
          <Text
            fontSize="lg"
            fontWeight="medium"
            textAlign="center"
            color="#12327C"
          >
            Em cada adoção, um capítulo emocionante começa. Faça parte da
            história no universo Pet Guardian
          </Text>
          <FormControl>
            <FormLabel fontSize="20px" color="#12327C">
              E-mail
            </FormLabel>
            <Input type="email" placeholder="Digite seu e-mail" required />
          </FormControl>
          <FormControl mt={2}>
            <FormLabel fontSize="20px" color="#12327C">
              Senha
            </FormLabel>
            <Input type="password" placeholder="Digite sua senha" required />
          </FormControl>
          <Button colorScheme="blue" w="240px" h="40px">
            Entrar
          </Button>
          <Button colorScheme="blue" w="240px" h="40px">
            Cadastre-se
          </Button>
        </VStack>
      </Box>
    </Box>
  )
}

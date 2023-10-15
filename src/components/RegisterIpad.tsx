import { Box, Input, Image, Button, Text, VStack } from '@chakra-ui/react'

export default function RegisterIpad() {
  return (
    <Box
      bg="blue.500"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box bg="white" p={8} borderRadius="lg" boxShadow="lg" w="600px">
        <VStack spacing={4}>
          <Box textAlign="center">
            <Image src="./Logomarca.png" alt="Logomarca" />
            <Text fontSize="32px" fontWeight="bold" color="#12327C">
              Ainda não tem cadastro?
            </Text>
          </Box>
          <Text
            fontSize="lg"
            fontWeight="medium"
            textAlign="center"
            color="#12327C"
          >
            Para dar início a essa empolgante jornada em companheiro ideal,
            precisamos de algumas informações:
          </Text>
          <Input placeholder="Digite seu nome" size="md" />
          <Input placeholder="Digite seu CPF" size="md" />
          <Input placeholder="Digite seu E-mail" size="md" />
          <Input placeholder="(xx) 9xxxx-xxxx" size="md" />
          <Input placeholder="Digite sua senha" type="password" size="md" />
          <Input placeholder="Confirme a senha" type="password" size="md" />
          <Button colorScheme="blue" w="full">
            Cadastre-se
          </Button>
        </VStack>
      </Box>
    </Box>
  )
}

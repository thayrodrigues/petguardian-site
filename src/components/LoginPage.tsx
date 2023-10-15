import {
  Box,
  VStack,
  Heading,
  Text,
  Input,
  Button,
  Image,
} from '@chakra-ui/react'

export default function LoginPage() {
  return (
    <Box
      display="flex"
      width="100vw"
      height="100vh"
      bg="#12327C"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        p={10}
        bg="white"
        boxShadow="xl"
        borderRadius="lg"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width={['90%', '80%', '60%', '40%']}
      >
        <Image
          src="./Logomarca.png"
          alt="Pet Guardian Logo"
          w="320px"
          h="255px"
          mb={5}
        />
        <Heading fontSize="2xl" mb={4}>
          Bem vindo!
        </Heading>
        <Text textAlign="center" mb={6}>
          Em cada adoção, um capítulo emocionante começa. Faça parte da história
          no universo Pet Guardian
        </Text>
        <VStack spacing={4} width="100%" alignItems="stretch" mb={6}>
          <Input placeholder="Digite seu e-mail" />
          <Input placeholder="Digite sua senha" type="password" />
        </VStack>
        <VStack spacing={4} width="100%" alignItems="stretch">
          <Button colorScheme="blue">Entrar</Button>
          <Button colorScheme="blue">Cadastre-se</Button>
        </VStack>
      </Box>
    </Box>
  )
}

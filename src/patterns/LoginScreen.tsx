'use client'

import LoginForm from '@/components/LoginForm'
import { Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'

export default function LoginScreen() {
  const router = useRouter()
  return (
    <Flex
      w="full"
      h="100vh"
      bg="linear-gradient(180deg, #5C99E1 32.86%, #1916BB 100%)"
    >
      <Flex
        color="#12327C"
        w="full"
        borderRadius="2xl"
        bg="white"
        p={6}
        my={6}
        align="center"
        direction="column"
      >
        <Image
          src="./Logomarca.png"
          alt="logomarca petguardian"
          h="30%"
          w="auto"
        />
        <Heading>Bem vindo!</Heading>
        <Text fontWeight="light">
          Em cada adoção, um capítulo emocionante começa. Faça parte da história
          no universo Pet Guardian
        </Text>
        <LoginForm />
        <Button
          colorScheme="blue"
          w="80%"
          onClick={() => router.push('/cadastre')}
        >
          Cadastre-se
        </Button>
      </Flex>
    </Flex>
  )
}

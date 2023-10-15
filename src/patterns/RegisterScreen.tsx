'use client'

import RegisterForm from '@/components/RegisterForm'
import { Flex, Heading, Image, Text } from '@chakra-ui/react'

export default function RegisterScreen() {
  return (
    <Flex
      w="full"
      h="155vh"
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
          h="20%"
          w="auto"
        />
        <Heading>Ainda não tem cadastro?</Heading>
        <Text fontWeight="light">
          Para dar início a essa empolgante jornada em busca do seu companheiro
          ideal, precisamos de algumas informações.
        </Text>
        <RegisterForm />
      </Flex>
    </Flex>
  )
}

import { Box, VStack, Heading, Text, CloseButton } from '@chakra-ui/react'

export default function Sidebar() {
  return (
    <Box
      width="260px"
      height="100vh"
      bg="white"
      p={5}
      boxShadow="md"
      position="fixed"
      top={0}
      left={0}
      zIndex={10}
    >
      <CloseButton mb={4} />
      <Heading mb={5} fontSize="xl" color="#12327C">
        Menu
      </Heading>
      <VStack align="start" spacing={4} mb={5}>
        <Text cursor="pointer" color="#171717" fontWeight="bold">
          Pets para adotar
        </Text>
        <Text cursor="pointer" color="#171717" fontWeight="bold">
          Cadastrar Pet
        </Text>
        <Text cursor="pointer" color="#171717" fontWeight="bold">
          Minhas conversas
        </Text>
        <Text cursor="pointer" color="#171717" fontWeight="bold">
          Sair
        </Text>
      </VStack>
      <Box mt="auto">
        <VStack align="start">
          <Box
            borderRadius="full"
            p={2}
            bgColor="blue.300"
            width="40px"
            height="40px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            fontSize="12px"
            fontWeight="bold"
            color="#000000"
            mb={2}
          >
            TA
          </Box>
          <Text fontWeight="bold" color="#1F1F1F">
            Tatiane Alves
          </Text>
          <Text fontSize="sm" color="#444444">
            São José dos Campos
          </Text>
        </VStack>
      </Box>
    </Box>
  )
}

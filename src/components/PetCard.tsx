import { Flex, Image, Box, Heading, Text } from '@chakra-ui/react'

export default function PetCard() {
  return (
    <Flex bg="gray.100" borderRadius="md" p={4} maxW="400px" align="center">
      <Image src="/Dunga.png" alt="Dunga" borderRadius="full" boxSize="80px" />
      <Box ml={4}>
        <Heading size="md" color="#3772FF">
          Dunga
        </Heading>
        <Text fontFamily="Montserrat">2 anos</Text>
        <Text fontFamily="Montserrat">Porte pequeno</Text>
        <Text fontFamily="Montserrat">Calmo e educado</Text>
        <Text fontFamily="Montserrat">2,2km - cães</Text>
      </Box>
      <Text
        fontFamily="Montserrat"
        lineHeight="1.6"
        fontWeight="regular"
        fontSize="10px"
        textDecoration="underline"
        color="#444444"
        width="97.1px"
        height="13.63px"
        textAlign="end"
      >
        ver detalhes
      </Text>
    </Flex>
  )
}

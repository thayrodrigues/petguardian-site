import { Box, Flex, Heading, Select, Text } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import PetCard from './PetCard'

export default function PetList() {
  return (
    <Box px={5}>
      <Text
        fontFamily="Montserrat"
        lineHeight="1.43"
        fontWeight="bold"
        fontSize="16px"
        color="#12327C"
        textAlign="center"
        mt={4}
      >
        endereço usuário
        <ChevronDownIcon ml={2} />
      </Text>
      <Heading
        fontFamily="Montserrat"
        fontWeight="400"
        fontSize="18px"
        lineHeight="20px"
        textAlign="center"
        color="#12327C"
        mb={4}
        p={5}
      >
        Veja os amigos disponíveis para adoção!
      </Heading>
      <Flex mb={4} justifyContent="center" maxW="1000px" wrap="wrap" gap={4}>
        <Select placeholder="Categoria" icon={<ChevronDownIcon />} width="sm" />
        <Select placeholder="Cães" icon={<ChevronDownIcon />} width="sm" />
      </Flex>
      <Flex mb={4} wrap="wrap" gap={6} w="full" justify="center">
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
      </Flex>
    </Box>
  )
}

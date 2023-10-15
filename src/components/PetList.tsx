import { Box, Flex, Heading, Select, Image, Text } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

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
      <Flex mb={4} justifyContent="space-between">
        <Select placeholder="Ordenar" icon={<ChevronDownIcon />} width="48%" />
        <Select placeholder="Cães" icon={<ChevronDownIcon />} width="48%" />
      </Flex>
      <Box mb={4}>
        <Flex bg="gray.100" borderRadius="md" p={4} align="center">
          <Image
            src="./Dunga.png"
            alt="Dunga"
            borderRadius="full"
            boxSize="80px"
          />
          <Box ml={4}>
            <Heading size="md" color="#3772FF">
              Dunga
            </Heading>
            <Text>2 anos</Text>
            <Text>Porte pequeno</Text>
            <Text>Calmo e educado</Text>
            <Text>2,2km - cães</Text>
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
      </Box>
      <Box mb={4}>
        <Flex bg="gray.100" borderRadius="md" p={4} align="center">
          <Image
            src="./Sirius.png"
            alt="Sirius"
            borderRadius="full"
            boxSize="80px"
          />
          <Box ml={4}>
            <Heading size="md" color="#3772FF">
              Sirius
            </Heading>
            <Text>6 anos</Text>
            <Text>Porte grande</Text>
            <Text>Ativo e educado</Text>
            <Text>5,3km - cães</Text>
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
      </Box>
      <Box mb={4}>
        <Flex bg="gray.100" borderRadius="md" p={4} align="center">
          <Image
            src="./Fiona.png"
            alt="Fiona"
            borderRadius="full"
            boxSize="80px"
          />
          <Box ml={4}>
            <Heading size="md" color="#3772FF">
              Fiona
            </Heading>
            <Text>3 anos</Text>
            <Text>Porte pequeno</Text>
            <Text>Calma e carinhosa</Text>
            <Text>1,7km - cães</Text>
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
      </Box>
    </Box>
  )
}

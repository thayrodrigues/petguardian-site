import { Box, Flex, Text, Button, Image, Circle } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'

export default function PetInfo() {
  return (
    <Box bg="white" p={4}>
      <Flex justifyContent="space-between" alignItems="center">
        <Button leftIcon={<ChevronLeftIcon />} variant="ghost" color="#12327C">
          voltar
        </Button>
      </Flex>
      <Flex flexDirection="column" alignItems="center" mt={6}>
        <Text fontSize="2xl" fontWeight="bold" color="#12327C">
          Dunga
        </Text>
        <Image src="./Dunga.png" alt="Dunga" w="195px" h="195px" mb={2} />
      </Flex>
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
        mt={6}
      >
        <Flex justifyContent="space-between">
          <Box>
            <Text fontSize="lg" fontWeight="600" color="#12327C">
              Informações do Pet
            </Text>
            <Text
              fontFamily="Montserrat"
              fontSize="14px"
              fontWeight="400"
              lineHeight="20px"
              letterSpacing="0px"
            >
              2 anos
            </Text>
            <Text
              fontFamily="Montserrat"
              fontSize="14px"
              fontWeight="400"
              lineHeight="20px"
              letterSpacing="0px"
            >
              Porte pequeno
            </Text>
          </Box>
          <Box>
            <Text
              fontFamily="Montserrat"
              fontSize="14px"
              fontWeight="400"
              lineHeight="20px"
              letterSpacing="0px"
              mt={7}
              mr={20}
            >
              Calmo e educado
            </Text>
            <Text
              fontFamily="Montserrat"
              fontSize="14px"
              fontWeight="400"
              lineHeight="20px"
              letterSpacing="0px"
            >
              2,2km - cães
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box mt={6}>
        <Text fontSize="lg" fontWeight="600" color="#12327C">
          Descrição
        </Text>
        <Text
          align="justify"
          fontSize="12px"
          lineHeight="20px"
          color="#1F1F1F"
          mt={2}
        >
          Comumente descrito como um cão calmo e educado, o Corgi de 2 anos de
          idade exibe maturidade e tranquilidade. Seu comportamento dócil e
          equilibrado faz dele um companheiro agradável para famílias e
          indivíduos. Sua natureza educada o torna facilmente adaptável a
          diferentes ambientes e situações sociais, tornando-o um amigo leal e
          de confiança.
        </Text>
      </Box>
      <Box mt={6}>
        <Text fontSize="lg" fontWeight="600" color="#12327C">
          Doador
        </Text>
        <Flex alignItems="center" mt={2}>
          <Circle bg="#63B3ED" size="40px">
            <Text fontFamily="Inter" color="#000000" fontWeight="bold">
              TA
            </Text>
          </Circle>
          <Box ml={4}>
            <Text
              fontFamily="Montserrat"
              fontWeight="500"
              fontSize="14px"
              lineHeight="20px"
              color="#1F1F1F"
            >
              Tatiane Alves
            </Text>
            <Text
              fontFamily="Montserrat"
              fontWeight="400"
              fontSize="12px"
              lineHeight="20px"
              color="#444444"
            >
              São José dos Campos
            </Text>
          </Box>
        </Flex>
      </Box>
      <Button mt={6} colorScheme="blue">
        Falar com responsável
      </Button>
    </Box>
  )
}

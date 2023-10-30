'use client'

import { Box, Flex, Text, Button, Container, Avatar } from '@chakra-ui/react'
import { PetsProps } from '@/types/petsTypes'

export default function PetInfo({
  pet,
  owner,
}: {
  pet: PetsProps
  owner: boolean
}) {
  return (
    <Container bg="white" p={4}>
      <Flex flexDirection="column" alignItems="center" mt={6} gap={4}>
        <Text fontSize="2xl" fontWeight="bold" color="#12327C">
          {pet.name}
        </Text>
        <Avatar size="2xl" name={pet.name} src={pet.photoUrl} />
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
              fontSize="14px"
              fontWeight="400"
              lineHeight="20px"
              letterSpacing="0px"
            >
              {pet.age} anos
            </Text>
            <Text
              fontSize="14px"
              fontWeight="400"
              lineHeight="20px"
              letterSpacing="0px"
            >
              Porte {pet.animalSize}
            </Text>
          </Box>
          <Box>
            <Text
              fontSize="14px"
              fontWeight="400"
              lineHeight="20px"
              letterSpacing="0px"
              mt={7}
              mr={20}
            >
              {pet.qualities.join(', ')}
            </Text>
            <Text
              fontSize="14px"
              fontWeight="400"
              lineHeight="20px"
              letterSpacing="0px"
            >
              {pet.distance ? `${pet.distance} km -` : ''} {pet.breed}
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
          {pet.description}
        </Text>
      </Box>
      {!owner && (
        <Box mt={6}>
          <Text fontSize="lg" fontWeight="600" color="#12327C">
            Doador
          </Text>
          <Flex alignItems="center" mt={2}>
            <Avatar size="md" name={pet.owner.name} />
            <Box ml={4}>
              <Text
                fontWeight="500"
                fontSize="14px"
                lineHeight="20px"
                color="#1F1F1F"
              >
                {pet.owner.name}
              </Text>
              <Text
                fontWeight="400"
                fontSize="12px"
                lineHeight="20px"
                color="#444444"
              >
                {pet.owner.email}
              </Text>
            </Box>
          </Flex>
          <Button mt={6} colorScheme="blue">
            Falar com responsável
          </Button>
        </Box>
      )}
    </Container>
  )
}

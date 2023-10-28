import { PetsProps } from '@/types/petsTypes'
import { Flex, Box, Heading, Text, Avatar, Button } from '@chakra-ui/react'

export default function PetCard({
  name,
  photoUrl,
  age,
  distance,
  category,
  animalSize,
  qualities,
}: PetsProps) {
  return (
    <Flex
      bg="white"
      borderRadius="2xl"
      py={4}
      px={8}
      w="400px"
      align="center"
      shadow="2xl"
    >
      <Avatar size="2xl" name={name} src={photoUrl} />
      <Box ml={4} w="full">
        <Heading size="md" color="blue.500">
          {name}
        </Heading>
        <Text>{age} anos</Text>
        <Text>Porte {animalSize}</Text>
        <Text>{qualities.join(', ')}</Text>
        {!distance ? (
          <Text fontSize="xs" my={2}>
            {category}
          </Text>
        ) : (
          <Text fontSize="xs" my={2}>
            {distance} km - {category}
          </Text>
        )}
        <Flex w="full" justify="end">
          <Button variant="link" size="xs" colorScheme="blue">
            ver detalhes
          </Button>
        </Flex>
      </Box>
    </Flex>
  )
}

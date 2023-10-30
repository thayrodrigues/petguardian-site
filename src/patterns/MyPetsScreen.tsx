'use client'

import PetCard from '@/components/PetCard'
import BackNavButton from '@/components/backNavButton'
import { PetsProps } from '@/types/petsTypes'
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function MyPetsScreen({ pets }: { pets: PetsProps[] }) {
  const router = useRouter()

  return (
    <Box w="full" bg="gray.50" maxW="1200px" minH="90vh" mx="auto" p={8}>
      <BackNavButton />
      <Heading color="blue.700" fontSize="3xl" mt={4}>
        Meu Pets
      </Heading>

      <Flex w="full" justify="end">
        <Button
          colorScheme="blue"
          leftIcon={<Plus size={18} />}
          onClick={() => router.push('/cadastro-de-pet')}
        >
          Adicionar
        </Button>
      </Flex>

      <Flex mb={4} wrap="wrap" gap={6} w="full" justify="center" mt={16}>
        {pets && pets.length > 0 ? (
          pets.map((pet) => (
            <PetCard
              key={pet.id}
              name={pet.name}
              age={pet.age}
              animalSize={pet.animalSize}
              category={pet.category}
              distance={pet.distance}
              photoUrl={pet.photoUrl}
              qualities={pet.qualities}
              breed={pet.breed}
              cep={pet.cep}
              description={pet.description}
              id={pet.id}
              userId={pet.userId}
            />
          ))
        ) : (
          <Box textAlign="center">
            <Text color="blue.700">
              Você ainda não possui pets cadastrados,
            </Text>
            <Text color="blue.700" mt={6}>
              clique em adicionar e ajude seu amiguinho a encontrar um lar.
            </Text>
          </Box>
        )}
      </Flex>
    </Box>
  )
}

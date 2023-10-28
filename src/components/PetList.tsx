'use client'
import { useState, useRef } from 'react'

import {
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Spinner,
  Text,
  useToast,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import PetCard from './PetCard'
import { Search } from 'lucide-react'
import usePets from '@/hooks/usePets'

export default function PetList({ token }: { token: string }) {
  const [searchCep, setSearchCep] = useState('')
  const { pets, loading, error } = usePets({ token, cep: searchCep })
  const searchRef = useRef<HTMLInputElement>(null)
  const toast = useToast()

  const handleSearchCep = () => {
    const cep = searchRef.current?.value
    setSearchCep(cep || '')
  }

  if (error) {
    toast({
      title: 'Erro ao buscar animais',
      description: 'Ocorreu um erro ao buscar os animais, tente novamente',
      status: 'error',
      duration: 9000,
      isClosable: true,
    })
  }

  return (
    <Flex
      direction="column"
      bg="gray.50"
      w="full"
      minH="100vh"
      align="center"
      px={8}
    >
      <FormControl w="xs" borderRadius="2xl" my={6}>
        <FormLabel>Busque os animais próximos a você</FormLabel>
        <InputGroup w="xs">
          <Input type="text" placeholder="Digite seu cep" ref={searchRef} />
          <InputRightElement>
            <IconButton
              colorScheme="blue"
              aria-label="buscar"
              icon={<Search size={16} />}
              onClick={handleSearchCep}
            />
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Heading
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
      <Flex w="full" maxW="1200px" mb={4} wrap="wrap" gap={4}>
        <Select
          placeholder="Categoria"
          icon={<ChevronDownIcon />}
          width="2xs"
        />
        <Select placeholder="Cães" icon={<ChevronDownIcon />} width="2xs" />
      </Flex>
      <Flex mb={4} wrap="wrap" gap={6} w="full" justify="center">
        {loading && (
          <Flex direction="column" align="center" mt={16}>
            <Spinner size="xl" color="blue.500" mb={4} speed="0.70s" />
            <Text>Carregando...</Text>
          </Flex>
        )}
        {pets.length === 0 && !loading && (
          <Flex direction="column" align="center" mt={16}>
            <Text>Digite seu cep para buscarmos animais próximos a você</Text>
          </Flex>
        )}
        {!loading &&
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
          ))}
      </Flex>
    </Flex>
  )
}

'use client'

import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Select,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import PetCard from './PetCard'
import { Search } from 'lucide-react'

export default function PetList() {
  return (
    <Flex direction="column" w="full" align="center" px={8}>
      <FormControl w="xs" borderRadius="2xl" my={6}>
        <FormLabel>Busque os animais próximos a você</FormLabel>
        <InputGroup w="xs">
          <InputRightElement>
            <IconButton
              colorScheme="blue"
              aria-label="buscar"
              icon={<Search size={16} />}
            />
          </InputRightElement>
          <Input type="text" placeholder="Digite seu cep" />
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
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
        <PetCard />
      </Flex>
    </Flex>
  )
}

import {
  Box,
  Flex,
  Heading,
  Button,
  Input,
  Select,
  Checkbox,
  Textarea,
  FormControl,
  FormLabel,
} from '@chakra-ui/react'

import { ChevronLeftIcon } from '@chakra-ui/icons'

export default function PetRegister() {
  return (
    <Box px={5} py={6} bg="white">
      <Button
        leftIcon={<ChevronLeftIcon />}
        variant="ghost"
        mb={4}
        color="#12327C"
      >
        voltar
      </Button>
      <Heading mb={4} textAlign="center" color="#12327C">
        Cadastro de Pet
      </Heading>
      <FormControl mb={4}>
        <FormLabel color="#12327C">Nome do Pet:</FormLabel>
        <Input placeholder="Digite o nome do pet" />
      </FormControl>
      <Flex mb={4} justifyContent="space-between">
        <FormControl width="48%">
          <FormLabel color="#12327C">Categoria:</FormLabel>
          <Select placeholder="Cães"></Select>
        </FormControl>
        <FormControl width="48%">
          <FormLabel color="#12327C">Idade:</FormLabel>
          <Input placeholder="Digite a idade" />
        </FormControl>
      </Flex>
      <FormControl mb={4}>
        <FormLabel color="#12327C">Selecione as qualidades:</FormLabel>
        <Checkbox defaultChecked>Calmo</Checkbox>
        <Checkbox>Ativo</Checkbox>
        <Checkbox>Carinhoso</Checkbox>
        <Checkbox>educado</Checkbox>
        <Checkbox>brincalhão</Checkbox>
        <Checkbox>esperto</Checkbox>
      </FormControl>
      <FormControl mb={4}>
        <FormLabel color="#12327C">Porte:</FormLabel>
        <Select placeholder="Porte Grande"></Select>
      </FormControl>
      <FormControl mb={4}>
        <FormLabel color="#12327C">Descrição:</FormLabel>
        <Textarea placeholder="Descreva o Pet" />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel color="#12327C">Foto:</FormLabel>
        <Input type="file" />
      </FormControl>
      <Button colorScheme="blue" width="100%">
        Cadastrar
      </Button>
    </Box>
  )
}

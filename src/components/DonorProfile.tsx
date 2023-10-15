import {
  Box,
  Flex,
  Heading,
  Button,
  Input,
  Avatar,
  Text,
  FormControl,
  FormLabel,
} from '@chakra-ui/react'

import { ChevronLeftIcon, EditIcon } from '@chakra-ui/icons'

export default function DonorProfile() {
  return (
    <Box px={5} py={6} bg="white">
      <Flex justifyContent="space-between" alignItems="center" mb={5}>
        <Button leftIcon={<ChevronLeftIcon />} variant="ghost" color="#12327C">
          voltar
        </Button>
      </Flex>
      <Heading fontSize="20px" mb={4} textAlign="center" color="#12327C">
        Meu Perfil
      </Heading>
      <Text fontFamily="Poppins" mb={4} textAlign="center" color="#12327C">
        Esse é o perfil que será visualizado por cuidadores responsáveis ou
        organizações não governamentais que recebem sua mensagem.
      </Text>
      <Flex justifyContent="center" mb={4}>
        <Avatar
          size="lg"
          w="64px"
          h="64px"
          name="TA"
          bg="blue.300"
          color="#000000"
        />
        <EditIcon
          w="18px"
          h="18px"
          color="blue.700"
          cursor="pointer"
          mr={2}
          mt={12}
        />
      </Flex>
      <FormControl mb={4} color="#12327C">
        <FormLabel>Nome e Sobrenome:</FormLabel>
        <Input placeholder="Tatiane Alves" />
      </FormControl>
      <FormControl mb={4} color="#12327C">
        <FormLabel>CPF:</FormLabel>
        <Input placeholder="223.432.345-12" />
      </FormControl>
      <FormControl mb={4} color="#12327C">
        <FormLabel>E-mail:</FormLabel>
        <Input placeholder="tatiane_alves@gmail.com" />
      </FormControl>
      <FormControl mb={4} color="#12327C">
        <FormLabel>Telefone:</FormLabel>
        <Input placeholder="(23) 99828-2098" />
      </FormControl>
      <FormControl mb={4} color="#12327C">
        <FormLabel>Senha:</FormLabel>
        <Input type="password" placeholder="**********" />
      </FormControl>
      <FormControl mb={4} color="#12327C">
        <FormLabel>Confirmar senha:</FormLabel>
        <Input type="password" placeholder="**********" />
      </FormControl>
      <Button colorScheme="blue" width="100%" mt={4}>
        Salvar
      </Button>
    </Box>
  )
}

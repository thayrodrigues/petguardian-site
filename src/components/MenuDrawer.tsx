import { tokenStore } from '@/infra/nookies'
import { Link } from '@chakra-ui/next-js'
import {
  Avatar,
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react'
import { LogOut, Menu } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'

export default function MenuDrawer({ userName }: { userName: string }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()
  const btnRef = useRef(null)

  const handleLogout = () => {
    tokenStore.delete()
    router.push('/')
  }

  return (
    <>
      <IconButton
        variant="unstyled"
        aria-label="Menu"
        icon={<Menu />}
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
      />

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <VStack align="start" spacing={4} mb={5}>
              <Text cursor="pointer" color="#171717" fontWeight="bold">
                Pets para adotar
              </Text>
              <Text cursor="pointer" color="#171717" fontWeight="bold">
                Cadastrar Pet
              </Text>
              <Text cursor="pointer" color="#171717" fontWeight="bold">
                Minhas conversas
              </Text>
              <Text cursor="pointer" color="#171717" fontWeight="bold">
                Sair
              </Text>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Flex
              w="full"
              justify="space-between"
              align="center"
              gap={4}
              mx={2}
            >
              <Avatar name={userName} size="md" />
              <Box>
                <Text fontWeight="bold" color="#1F1F1F">
                  {userName}
                </Text>
                <Link href="/perfil" color="#1F1F1F">
                  Meu Dados
                </Link>
              </Box>
              <IconButton
                aria-label="sair"
                variant="ghost"
                colorScheme="red"
                icon={<LogOut size={18} />}
                onClick={handleLogout}
              />
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

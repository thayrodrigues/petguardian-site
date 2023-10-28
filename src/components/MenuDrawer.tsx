import { tokenStore } from '@/infra/nookies'
import { Link } from '@chakra-ui/next-js'
import {
  Avatar,
  Box,
  Button,
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
  useDisclosure,
} from '@chakra-ui/react'
import { Dog, Home, LogOut, Menu } from 'lucide-react'
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

          <DrawerBody mt={12}>
            <Flex direction="column" align="flex-start" gap={6}>
              <Button
                variant="link"
                colorScheme="blue"
                leftIcon={<Home size={18} />}
                _hover={{ color: 'blue.700' }}
                onClick={() => router.push('/home')}
              >
                Início
              </Button>
              <Button
                variant="link"
                colorScheme="blue"
                leftIcon={<Dog size={18} />}
                _hover={{ color: 'blue.700' }}
                onClick={() => router.push('/meus-pets')}
              >
                Meus Pets
              </Button>
            </Flex>
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

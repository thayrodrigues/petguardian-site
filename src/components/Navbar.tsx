import { Image, Flex, Text, Icon, Spacer } from '@chakra-ui/react'
import { BellIcon } from '@chakra-ui/icons'
import MenuDrawer from './MenuDrawer'

export default function Navbar() {
  return (
    <Flex bg="#12327C" p={4} color="white" align="center">
      <Image
        src="/petguardian-white.png"
        alt="Pet Guardian Icon"
        w={8}
        h={8}
        mr={2}
      />
      <Text fontFamily="Marcellus SC" fontSize="xl" fontWeight="bold" ml={2}>
        Pet Guardian
      </Text>
      <Spacer />
      <Icon as={BellIcon} w={6} h={6} mr={4} />
      <MenuDrawer />
    </Flex>
  )
}

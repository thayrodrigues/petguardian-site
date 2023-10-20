'use client'

import { Image, Flex, Text, Icon, Spacer } from '@chakra-ui/react'
import { BellIcon } from '@chakra-ui/icons'
import MenuDrawer from './MenuDrawer'

interface NavbarProps {
  userName: string
}

export default function Navbar({ userName }: NavbarProps) {
  return (
    <Flex bg="#12327C" p={4} color="white" align="center">
      <Image
        src="/petguardian-white.svg"
        alt="Pet Guardian Icon"
        w="auto"
        h={12}
        mr={2}
      />
      <Text fontSize="2xl" fontWeight="bold" ml={2}>
        Pet Guardian
      </Text>
      <Spacer />
      <Icon as={BellIcon} w={6} h={6} mr={4} />
      <MenuDrawer userName={userName} />
    </Flex>
  )
}

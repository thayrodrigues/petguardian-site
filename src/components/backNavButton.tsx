import { Button, Flex } from '@chakra-ui/react'
import { ChevronLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function BackNavButton() {
  const router = useRouter()
  return (
    <Flex w="full">
      <Button
        variant="link"
        leftIcon={<ChevronLeft size="16" />}
        onClick={() => router.back()}
        size="sm"
      >
        voltar
      </Button>
    </Flex>
  )
}

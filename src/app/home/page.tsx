import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { jwtData } from '@/infra/jwToken'
import Navbar from '@/components/Navbar'
import PetList from '@/components/PetList'

const userData = () => {
  const token = cookies().get('PETGUARDIAN_TK')
  if (!token) {
    redirect('/')
  }

  return jwtData(token.value)
}

export default function Home() {
  const user = userData()

  return (
    <>
      <Navbar userName={user.name} />
      <PetList />
    </>
  )
}

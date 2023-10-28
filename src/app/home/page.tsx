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

  // return jwtData(token.value)
  return {
    user: jwtData(token.value),
    token: token.value,
  }
}

export default function Home() {
  const session = userData()

  return (
    <>
      <Navbar userName={session.user.name} />
      <PetList token={session.token} />
    </>
  )
}

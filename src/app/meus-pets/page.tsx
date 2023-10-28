import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { jwtData } from '@/infra/jwToken'
import Navbar from '@/components/Navbar'
import MyPetsScreen from '@/patterns/MyPetsScreen'
import { petServices } from '@/services/petsService'

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

export default async function MyPets() {
  const session = userData()

  const pets = await petServices.getPetsByUser(
    session.token,
    session.user.userId,
  )

  return (
    <>
      <Navbar userName={session.user.name} />
      <MyPetsScreen pets={pets} />
    </>
  )
}

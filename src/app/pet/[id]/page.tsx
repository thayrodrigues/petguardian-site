import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { jwtData } from '@/infra/jwToken'
import Navbar from '@/components/Navbar'
import { petServices } from '@/services/petsService'
import PetDescriptionSreen from '@/patterns/PetDescriptionSreen'

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

export default async function PetId({ params }: { params: { id: string } }) {
  const session = userData()

  try {
    const petData = await petServices.getPetById(session.token, params.id)
    const owner = session.user.userId === petData[0].owner.userId
    return (
      <>
        <Navbar userName={session.user.name} />
        <PetDescriptionSreen
          pet={petData[0]}
          owner={owner}
          token={session.token}
        />
      </>
    )
  } catch (error: any) {
    console.log(error)
    if (error.response.status === 403) {
      redirect('/?error=403')
    }
  }
}

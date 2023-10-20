import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { jwtData } from '@/infra/jwToken'

import { userService } from '@/services/userService'
import Navbar from '@/components/Navbar'
import DonorProfile from '@/components/DonorProfile'

const tokenData = () => {
  const token = cookies().get('PETGUARDIAN_TK')
  if (!token) {
    redirect('/')
  }

  return jwtData(token.value)
}

export default async function Home() {
  const user = tokenData()
  const token = cookies().get('PETGUARDIAN_TK')

  if (!token) {
    redirect('/')
  }

  const userData = await userService.getUser(user.userId, token?.value)

  return (
    <>
      <Navbar userName={userData[0].name} />
      <DonorProfile data={userData[0]} token={token.value} />
    </>
  )
}

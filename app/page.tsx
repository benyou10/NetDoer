import Image from 'next/image'
import CanvasPage from './_components/canvas'
import { prisma } from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import { LoginButton, LogoutButton } from './_components/auth'
export default async function Home() {
  
  return (
   <>
   <CanvasPage/>
  </>
  )
}

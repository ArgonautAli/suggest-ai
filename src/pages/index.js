import Image from 'next/image'
import { Lato } from 'next/font/google'
import Main from '@/components/mainLayout/main'

const lato = Lato({ subsets: ['latin'], weight:['700']})

export default function Home() {
  return (
   <><Main /></>
  )
}

import { Lato } from 'next/font/google'
import Main from '@/components/mainLayout/main'
import Head from 'next/head';

const lato = Lato({ subsets: ['latin'], weight:['700']})




export default function Home() {
  return (
   <>
   <Head>
  <title>Suggest AI app</title>
  <link rel="icon" href="/favicon.ico" />
</Head>
   <Main /></>
  )
}

import Image from 'next/image'
import { Lato } from 'next/font/google'
import Main from '@/components/mainLayout/main'
import { Metadata } from 'next';
import Head from 'next/head';

const lato = Lato({ subsets: ['latin'], weight:['700']})

export const metadata = {
  title: 'Suggest AI',
  description: 'Made by Ali Haider Khan',
};


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

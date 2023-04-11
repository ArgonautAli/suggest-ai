import '@/styles/globals.css'
import Head from 'next/head'


export default function App({ Component, pageProps }) {
  return(
    <>
  <Head>
  <meta title="suggest AI app" name="suggest AI app" />
</Head>
<Component {...pageProps} />
</>
  )
  
 
}

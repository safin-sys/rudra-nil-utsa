import '../styles/global.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="uR73wVtmcchCUfsHMV8S2bJc2qHxSQAiC5p1wXTd1Fw" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

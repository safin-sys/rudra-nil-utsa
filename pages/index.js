import Head from 'next/head'
import Divider from '../components/Divider'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Love from '../components/Love'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Talk from '../components/Talk'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rudra Nil Utsa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Divider direction="right" />
      <Love />
      <Divider direction="left" />
      <Services />
      <Divider direction="right" />
      <Talk />
      <Footer />
    </>
  )
}

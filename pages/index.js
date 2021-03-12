import Head from 'next/head'
import Divider from '../components/Divider'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Love from '../components/Love'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Talk from '../components/Talk'

export const getStaticProps = () => {
  const services = [
      {
          name: "Windows Applications",
          des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem labore veritatis similique maxime excepturi officia."
      },
      {
          name: "Articles for your website",
          des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem labore veritatis similique maxime excepturi officia."
      },
      {
          name: "Android Apps",
          des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem labore veritatis similique maxime excepturi officia."
      },
  ]
  return {
      props: { services }
  }
}

export default function Home({ services }) {
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
      <Services services={services} />
      <Divider direction="right" />
      <Talk />
      <Footer />
    </>
  )
}

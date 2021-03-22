import Head from 'next/head'
import Divider from '../components/Divider'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Love from '../components/Love'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Talk from '../components/Talk'
import Order from '../components/Order'

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
  const packs = [
    {
        name: "Pack #1",
        des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis hic veritatis repellat iusto voluptatem temporibus quae eius magnam porro neque autem veniam aperiam, commodi dolores. Cum delectus id repellat commodi?",
        price: 5,
        words: 500,
        currency: "$"
    },
    {
        name: "Pack #2",
        des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis hic veritatis repellat iusto voluptatem temporibus quae eius magnam porro neque autem veniam aperiam, commodi dolores. Cum delectus id repellat commodi?",
        price: 10,
        words: 1000,
        currency: "$"
    },
    {
        name: "Pack #3",
        des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis hic veritatis repellat iusto voluptatem temporibus quae eius magnam porro neque autem veniam aperiam, commodi dolores. Cum delectus id repellat commodi?",
        price: 50,
        words: 5000,
        currency: "$"
    }
  ]
  return {
      props: { services, packs }
  }
}


export default function Home({ services, packs }) {
  return (
    <>
      <Head>
        <title>Rudra Nil Utsa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero title="Hello Guys! I'm Rudra." btn="Explore" />
      <Divider direction="right" />
      <Love />
      <Divider direction="left" />
      <Services services={services} />
      <Divider direction="right" />
      <Order packs={packs} />
      <Divider direction="left" />
      <Talk />
      <Footer />
    </>
  )
}

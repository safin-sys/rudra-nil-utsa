import Head from 'next/head'
import Divider from '../components/Divider'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

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
      <div style={{
        width: "20px",
        height: "200px",
        margin: "20px auto",
        backgroundColor: "white"
      }}></div>
      <Divider direction="left" />
      <div style={{
        width: "20px",
        height: "400px",
        margin: "20px auto",
        backgroundColor: "white"
      }}></div>
      <Divider direction="right" />
      <div style={{
        width: "20px",
        height: "600px",
        margin: "20px auto",
        backgroundColor: "white"
      }}></div>
    </>
  )
}

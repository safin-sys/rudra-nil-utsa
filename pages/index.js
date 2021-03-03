import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rudra Nil Utsha</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div style={{
        width: "20px",
        height: "200px",
        margin: "20px auto",
        backgroundColor: "white"
      }}></div>
      <div style={{
        width: "20px",
        height: "400px",
        margin: "20px auto",
        backgroundColor: "white"
      }}></div>
      <div style={{
        width: "20px",
        height: "600px",
        margin: "20px auto",
        backgroundColor: "white"
      }}></div>
    </>
  )
}

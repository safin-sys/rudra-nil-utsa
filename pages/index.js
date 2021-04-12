import Head from 'next/head'
import Divider from '../components/Divider'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Love from '../components/Love'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Talk from '../components/Talk'
import Order from '../components/Order'
import footerData from './api/footerData'
import client from './api/sanity'


export const getStaticProps = async () => {
  const footer = await footerData()
  const home = await client.fetch(`*[_type == 'home'][0]`)
  const skills = {
    title: home.skills.title,
    des: home.skills.description,
    skillList: home.skills.skillList
  }
  const services = {
    title: home.myServices.title,
    des: home.myServices.description,
    list: home.myServices.serviceList
  }
  const packs = {
    title: home.orderNow.title,
    des: home.orderNow.description,
    packageList: home.orderNow.packageList
  }
  return {
      props: {
        title: home.heroText,
        skills,
        services,
        packs,
        talk: home.letsTalk,
        footer
      }
  }
}


export default function Home({ title, skills, services, packs, talk, footer }) {
  return (
    <>
      <Head>
        <title>Rudra Nil Utsa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero title={title} btn="Explore" />
      <Divider direction="right" />
      <Love skills={skills} />
      <Divider direction="left" />
      <Services services={services} />
      <Divider direction="right" />
      <Order packs={packs} />
      <Divider id="talk" direction="left" />
      <Talk title={talk.title} des={talk.description} />
      <Footer data={footer} />
    </>
  )
}

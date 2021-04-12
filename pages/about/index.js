import Head from "next/head";
import Navbar from "../../components/Navbar";
import About from "../../components/About";
import Footer from "../../components/Footer";
import Divider from "../../components/Divider"
import Hero from "../../components/Hero";
import footerData from '../api/footerData'
import client from '../api/sanity'

export const getStaticProps = async () => {
    const footer = await footerData()
    const about = await client.fetch(`*[_type == 'about'][0]`)
    const title = about.heroTitle
    const para = about.paragraphList

    return {
        props: {
            about: para,
            title,
            footer
        }
    }
}

export default function AboutPage({ about, title, footer }) {
    return (
        <>
            <Head>
                <title>About | Rudra Nil Utsa</title>
            </Head>
            <Navbar />
            <Hero title={title} />
            <Divider />
            {about.map((abt, i) => {
                return <About key={i} about={abt} left={i % 2 === 0? true : false} />
            })}
            <Footer data={footer} />
        </>
    )
}
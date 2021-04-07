import Head from 'next/head'
import Footer from '../../components/Footer'
import Divider from '../../components/Divider'
import Hero from '../../components/Hero'
import Navbar from '../../components/Navbar'
import Soft from '../../components/Soft'
import client from '../api/sanity'


export const getStaticProps = async () => {
    const softs = await client.fetch('*[_type == "soft"]')
    
    const langColor = {};
    const res = await fetch("https://raw.githubusercontent.com/ozh/github-colors/master/colors.json")
    const data = await res.json();

    softs.forEach(soft => {
        if (data[soft.language]) {
            langColor[soft.language] = data[soft.language]['color'];
        }
    })

    return {
        props: {
            softs,
            langColor
        }
    }
}

const SoftwarePage = ({ softs, langColor }) => {
    return (
        <>
            <Head>
                <title>Softwares | Rudra Nil Utsa</title>
            </Head>
            <Navbar />
            <Hero title="Softwares I Made" />
            <Divider />
            <Soft softs={softs} langColor={langColor} />
            <Footer />
        </>
    )
}

export default SoftwarePage
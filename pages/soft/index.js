import Head from 'next/head'
import Footer from '../../components/Footer'
import Divider from '../../components/Divider'
import Hero from '../../components/Hero'
import Navbar from '../../components/Navbar'
import Soft from '../../components/Soft'

export const getStaticProps = async () => {
    const softres = await fetch('http://localhost:3000/softs.json')
    const softs = await softres.json()
    const langColor = {};
    const res = await fetch("https://raw.githubusercontent.com/ozh/github-colors/master/colors.json")
    const data = await res.json();

    softs.forEach(soft => {
        if (data[soft.lang]) {
            langColor[soft.lang] = data[soft.lang]['color'];
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
    console.log(softs);
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
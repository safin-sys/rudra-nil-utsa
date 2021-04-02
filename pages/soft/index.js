import Head from 'next/head'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import Navbar from '../../components/Navbar'

const SoftwarePage = () => {
    return (
        <>
            <Head>
                <title>Softwares | Rudra Nil Utsa</title>
            </Head>
            <Navbar />
            <Hero title="Softwares I Made" />
            <Footer />
        </>
    )
}

export default SoftwarePage
import Head from "next/head";
import Navbar from "../../components/Navbar";
import About from "../../components/About";
import Footer from "../../components/Footer";

export default function AboutPage() {
    return (
        <>
            <Head>
                <title>About | Rudra Nil Utsa</title>
            </Head>
            <Navbar />
            <About />
            <Footer />
        </>
    )
}
import Head from 'next/head'
import Footer from '../../components/Footer'
import Divider from '../../components/Divider'
import Hero from '../../components/Hero'
import Navbar from '../../components/Navbar'
import Soft from '../../components/Soft'

export const getStaticProps = async () => {
    const softs = [
        {
            title: 'ZREC',
            des: 'ZREC is a zlib (p)recompressor',
            lang: 'Pascal',
            plat: 'Windows (64bit)'
        },
        {
            title: 'PassMan',
            des: 'PassMan is a password manager for everyday use',
            lang: 'Pascal',
            plat: 'Android / Windows (32bit)'
        },
        {
            title: 'Image2PDF',
            des: 'Converts a bunch of images to a single pdf file.',
            lang: 'Pascal',
            plat: 'Windows'
        },
        {
            title: 'The Chromium Protector',
            des: 'A Password Protector for your browsers',
            lang: 'Pascal',
            plat: 'Windows (64bit)'
        },
        {
            title: 'Image2PDF Android',
            des: 'Converts a bunch of images to a single pdf file.',
            lang: 'Pascal',
            plat: 'Android'
        },
        {
            title: 'Netlock',
            des: 'A simple program to block websites for your device',
            lang: 'Pascal',
            plat: 'Windows (64bit) / Windows (32bit)'
        },
        {
            title: 'Desktop-Locker',
            des: 'A regular desktop locker that requires password to unlock. The application captures a photo using webcam if user fails to write the correct password.',
            lang: 'Pascal',
            plat: 'Windows (64bit) / Windows (32bit)'
        }
    ]
    const langColor = {};
    const url = "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json";
    const res = await fetch(url)
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
import Head from 'next/head'
import client from '../api/sanity'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import footerData from '../api/footerData'
import Hero from '../../components/Hero'
import RichText from '@sanity/block-content-to-react'
import style from '../../styles/soft/slug.module.scss'
import imageBuilder from '@sanity/image-url'

export const getStaticPaths = async () => {
    const softs = await client.fetch("*[_type == 'soft']")
    const paths = softs.map(soft => {
        return {
            params: {
                slug: soft.slug.current.toString()
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const soft = await client.fetch(`*[_type == 'soft' && slug.current == '${context.params.slug}']`)
    const footer = await footerData();
    return {
        props: {
            soft: soft[0],
            footer
        }
    }
}

const SoftPage = ({ soft, footer }) => {
    return (
        <div className={style.softPage}>
            <Head>
                <title>{soft.title} | Rudra Nil Utsa</title>
            </Head>
            <Navbar />
            <Hero title={soft.title} />
            <main className={`${style.richTextCon} container`}>
                <RichText blocks={soft.body} />
                {soft.screenshots && <Screenshots ss={soft.screenshots} />}
            </main>
            <Footer data={footer} />
        </div>
    )
}

export default SoftPage

const Screenshots = ({ ss }) => {
    const builder = imageBuilder(client)
    const urlFor = (src) => builder.image(src)
    return (
        <div className={style.ssCon}>
            <h1>Screenshots</h1>
            <div className={style.ss}>
                {ss.map((s, i) => {
                    return <img key={i} width="200" src={urlFor(s.image)} alt={s.alt}/>
                })}
            </div>
        </div>
    )
}






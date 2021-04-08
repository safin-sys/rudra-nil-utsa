import Head from "next/head";
import Navbar from "../../components/Navbar";
import About from "../../components/About";
import Footer from "../../components/Footer";
import Divider from "../../components/Divider"
import Hero from "../../components/Hero";
import footerData from '../api/footerData'

export const getStaticProps = async () => {
    const footer = await footerData()
    const about = [
        {
            title: "About Me",
            des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores rem, maiores, reiciendis perferendis quia iusto doloribus quidem sunt, cum facere accusantium perspiciatis a? Tempore neque animi voluptate laboriosam quisquam laudantium quae officiis ea deleniti ut optio, libero rerum architecto autem, vero minima veritatis rem ratione debitis? Libero rerum nostrum cum!"
        },
        {
            title: "Why Pascal is the best",
            des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores rem, maiores, reiciendis perferendis quia iusto doloribus quidem sunt, cum facere accusantium perspiciatis a? Tempore neque animi voluptate laboriosam quisquam laudantium quae officiis ea deleniti ut optio, libero rerum architecto autem, vero minima veritatis rem ratione debitis? Libero rerum nostrum cum!"
        },
        {
            title: "The Third Paragraph",
            des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores rem, maiores, reiciendis perferendis quia iusto doloribus quidem sunt, cum facere accusantium perspiciatis a? Tempore neque animi voluptate laboriosam quisquam laudantium quae officiis ea deleniti ut optio, libero rerum architecto autem, vero minima veritatis rem ratione debitis? Libero rerum nostrum cum!"
        },
    ]

    return {
        props: { about, footer }
    }
}

export default function AboutPage({ about, footer }) {
    return (
        <>
            <Head>
                <title>About | Rudra Nil Utsa</title>
            </Head>
            <Navbar />
            <Hero title="About Me" />
            <Divider />
            {about.map((abt, i) => {
                return <About key={i} about={abt} left={i % 2 === 0? true : false} />
            })}
            <Footer data={footer} />
        </>
    )
}
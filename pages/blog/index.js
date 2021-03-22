import Head from "next/head"
import Blog from "../../components/Blog"
import Divider from "../../components/Divider"
import Footer from "../../components/Footer"
import Hero from "../../components/Hero"
import Navbar from "../../components/Navbar"

const BlogPage = () => {
    return (
        <>
            <Head>
                <title>Blog | Rudra Nil Utsa</title>
            </Head>
            <Navbar />
            <Hero title="Welcome To My Blog" />
            <Divider direction="right" />
            <Blog />
            <Footer />
        </>
    )
}

export default BlogPage
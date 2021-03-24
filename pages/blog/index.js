import Head from "next/head"
import { useEffect } from "react"
import Blog from "../../components/Blog"
import Divider from "../../components/Divider"
import Footer from "../../components/Footer"
import Hero from "../../components/Hero"
import Navbar from "../../components/Navbar"

export const getStaticProps = async () => {
    const link = "https://www.googleapis.com/blogger/v3/blogs/990517938631563196/posts?callback=handleResponse&key=AIzaSyAJESQB3ddltUcDbZif3LUnX-Gzr18tBRg";

    const res = await fetch(link);
    const data = await res.text();
    
    const blogs = JSON.parse(data.replace(/^[^\(]*\(/, '').replace(/\);$/, ''));

    return {
        props: { blogs: blogs.items }
    }
}

const BlogPage = ({ blogs }) => {
    return (
        <>
            <Head>
                <title>Blog | Rudra Nil Utsa</title>
            </Head>
            <Navbar />
            <Hero title="Welcome To My Blog" />
            <Divider direction="right" />
            <Blog blogs={blogs} />
            <Footer />
        </>
    )
}

export default BlogPage
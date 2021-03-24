import style from '../styles/blog/Blog.module.scss'
import { AiOutlineArrowRight } from "react-icons/ai"

const Blog = ({ blogs }) => {
    return (
        <main className={`${style.main} container`}>
            {blogs.map((blog, i) => {
                 return <Card key={i} title={blog.title} date={blog.published} link={blog.url} />
            })}
        </main>
    )
}

export default Blog

const Card = ({ title, date, link }) => {
    const handleDate = () => {
        const d = new Date(date)
        return d
    } 
    handleDate()
    return (
        <a href={link} target="_blank" className={style.cards}>
            <h1>{title}</h1>
            <h6>{`${handleDate().getDate()}/${handleDate().getMonth() + 1}/${handleDate().getFullYear()}`} {`${handleDate().getHours()}:${handleDate().getMinutes()}`}</h6>
            <button>Read More <AiOutlineArrowRight/></button>
        </a>
    )
}
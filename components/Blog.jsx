import style from '../styles/blog/Blog.module.scss'

const blogs = [
    {title: "Carter Whitehead", date: "1635728586"},
	{title: "Colorado Marshall", date: "1601689917"},
	{title: "Andrew Hicks", date: "1590316540"},
	{title: "Brennan Witt", date: "1644188407"},
	{title: "Denton Mendoza", date: "1644157562"},
	{title: "Conan Larsen", date: "1585762993"},
	{title: "Benjamin Beck", date: "1641193978"},
	{title: "Carl Guerra", date: "1600514872"},
	{title: "Gregory Barron", date: "1620673955"},
	{title: "Ishmael Frank", date: "1641139465"},
	{title: "Kenneth Bowers", date: "1630962435"},
	{title: "Merritt Hayden", date: "1619591434"},
	{title: "Orlando Barton", date: "1601636069"},
	{title: "Carlos Stevenson", date: "1629596421"},
	{title: "Thor Burris", date: "1607112655"},
	{title: "Scott Olson", date: "1632230572"},
	{title: "Baxter King", date: "1619392768"},
	{title: "Lucius Maldonado", date: "1639656709"},
	{title: "Cedric Tillman", date: "1599048555"},
	{title: "Sean Herman", date: "1627049251"}
]

const content = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor consequatur nesciunt obcaecati ut optio ipsam quisquam facere culpa et corporis impedit delectus maiores dolores praesentium fugiat, quaerat hic numquam? Aut."

const Blog = () => {
    return (
        <main className={`${style.main} container`}>
            {blogs.map((blog, i) => {
                 return <Card key={i} title={blog.title} date={blog.date} content={content} />
            })}
        </main>
    )
}

export default Blog

const Card = ({ title, date, content }) => {
    const handleDate = () => {
        const num = parseInt(date)
        const d = new Date(num)
        return d
    } 
    handleDate()
    return (
        <div className={style.cards}>
            <h1>{title}</h1>
            <h6>{`${handleDate().getDate()}/${handleDate().getMonth() + 1}/${handleDate().getFullYear()}`} {`${handleDate().getHours()}:${handleDate().getMinutes()}`}</h6>
            <p>{content}</p>
        </div>
    )
}
import style from "../styles/about/About.module.scss"

const About = ({ about, left }) => {
    return (
        <main style={{flexDirection: left ? "" : "row-reverse"}} className={`${style.main} container`}>
            <h1 className={style.title}>{about.title}</h1>
            <Divider />
            <p>{about.des}</p>
        </main>
    )
}

export default About

const Divider = () => {
    return (
        <>
            <div className={style.vline}></div>
            <div className={style.hline}></div>
        </>
    )
}
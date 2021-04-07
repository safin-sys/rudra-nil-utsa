import style from '../styles/soft/Soft.module.scss'

const Soft = ({ softs, langColor }) => {
    return (
        <div className="container">
            {softs.map((soft, i) => {
                return <Cards key={i} soft={soft} langColor={langColor[soft.language]} />
            })}
        </div>
    )
}

const Cards = ({ soft, langColor }) => {
    return (
        <a href={`/soft/${soft.slug.current}`} className={style.soft}>
            <h1 className={`${style.title} gradientTitle`}>{soft.title}</h1>
            <p className={style.des}>{soft.description}</p>
            <div className={style.bottom}>
                <div className={style.lang}>
                    <span style={{backgroundColor: langColor}}></span>
                    <p>{soft.language}</p>
                </div>
                <p>{soft.platform}</p>
            </div>
        </a>
    )
}

export default Soft
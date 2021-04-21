import { AiOutlineArrowUp, AiOutlineMail } from 'react-icons/ai'
import { FiTwitter, FiInstagram, FiGithub, FiMapPin } from 'react-icons/fi'
import style from '../styles/Footer.module.scss'

const Footer = ({ data }) => {
    const getFullYear =() => {
        return new Date().getFullYear();
    }
    return (
        <footer className={style.footer}>
            <div className={style.top}>
                <div className={`${style.topCon} container`}>
                    <div className={style.about}>
                        <h1 className={`${style.title} gradientTitle`}>{data.title}</h1>
                        <p>{data.description}</p>
                        <div className={style.social}>
                            <a href={data.socials[1].link} target="_blank" rel="noopener noreferrer"><FiTwitter />Twitter</a>
                            <a href={data.socials[2].link} target="_blank" rel="noopener noreferrer"><FiInstagram />Instagram</a>
                            <a href={data.socials[0].link} target="_blank" rel="noopener noreferrer"><FiGithub />Github</a>
                        </div>
                    </div>
                    <div className={style.git}>
                        <h1>Get In Touch</h1>
                        <div className={style.contact}>
                            <a href={`mailto:${data.getInTouch[0].mail}`}> <AiOutlineMail /> {data.getInTouch[0].mail}</a>
                            <a href={`https://www.google.com/maps/place/${data.getInTouch[1].address}/`} target="_blank" rel="noopener noreferrer"> <FiMapPin className={style.address} /> {data.getInTouch[1].address}</a>
                        </div>
                    </div>
                    <div className={style.tags}>
                        <h1>Popular Tags</h1>
                        <div className={style.tagCon}>
                            {data.popularTags.map((tag, i) => {
                                return <p key={i}>{tag}</p>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.bottom}>
                <div className="container">
                    <p>{data.footerFooter}</p>
                    <p className="copywrite">© {getFullYear()} {data.copyright}</p>
                    <a role="button" href="#"><AiOutlineArrowUp />To The Top</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
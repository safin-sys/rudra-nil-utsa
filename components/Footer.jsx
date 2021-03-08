import { AiOutlineArrowUp, AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'
import { FiTwitter, FiInstagram, FiGithub, FiMapPin } from 'react-icons/fi'
import style from '../styles/Footer.module.scss'

const Footer = () => {
    const getFullYear =() => {
        return new Date().getFullYear();
    }
    return (
        <footer className={style.footer}>
            <div className={style.top}>
                <div className={`${style.topCon} container`}>
                    <div className={style.about}>
                        <h1 className={`${style.title} gradientTitle`}>Rudra Nil Utsa.</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis reiciendis sint quae explicabo tempora perferendis suscipit dolore.</p>
                        <div className={style.social}>
                            <a href="#"><FiTwitter /></a>
                            <a href="#"><FiInstagram /></a>
                            <a href="#"><FiGithub /></a>
                        </div>
                    </div>
                    <div className={style.git}>
                        <h1>Get In Touch</h1>
                        <div className={style.contact}>
                            <a href="#"> <AiOutlinePhone /> +880 170 0000 000</a>
                            <a href="#"> <AiOutlineMail /> example@example.com</a>
                            <a href="#"> <FiMapPin className={style.address} /> Savar, Dhaka, Bangladesh</a>
                        </div>
                        <button className="regular-btn">Send A Message</button>
                    </div>
                    <div className={style.tags}>
                        <h1>Popular Tags</h1>
                        <div className={style.tagCon}>
                            <p>Mobile</p>
                            <p>Development</p>
                            <p>Technology</p>
                            <p>App</p>
                            <p>Education</p>
                            <p>Business</p>
                            <p>Health</p>
                            <p>Industry</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.bottom}>
                <div className="container">
                    <p>Looks like you've reached the bottom of the page, Thanks for sticking around this long.</p>
                    <p className="copywrite">© {getFullYear()} Rudra Nil Utsa all rights reserved</p>
                    <a role="button" href="#"><AiOutlineArrowUp /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
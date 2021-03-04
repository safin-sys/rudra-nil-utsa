import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FiTwitter, FiInstagram, FiGithub } from 'react-icons/fi'
import { useRef } from 'react'
import style from '../styles/index/Navbar.module.scss'

const Navbar = () => {
    const mobileNav = useRef()
    const menuBtn = useRef()
    const closeBtn = useRef()
    const nav = useRef()

    const handleMenuBtn = () => {
        document.querySelector('body').classList.toggle('body-no-scroll');
        mobileNav.current.classList.toggle('mobile-active');
        menuBtn.current.classList.toggle('btnActive');
        closeBtn.current.classList.toggle('btnActive');
    }

    return (
        <header className={style.header}>
            <nav className="container" ref={nav}>
                <h1>
                    Rudra Nil Utsa
                </h1>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Softwares</a></li>
                    <li><a href="#">About</a></li>
                    <li><button className="regular-btn">Get In Touch</button></li>
                </ul>
                <button onClick={handleMenuBtn} className={`${style.menuBtn} btnActive`} ref={menuBtn}><AiOutlineMenu /></button>
                <button onClick={handleMenuBtn} className={style.closeBtn} ref={closeBtn}><AiOutlineClose /></button>
            </nav>
            <div className={style.mobileNav} ref={mobileNav}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Softwares</a></li>
                    <li><a href="#">About</a></li>
                    <li><button className="regular-btn">Get In Touch</button></li>
                </ul>
                <div className={style.social}>
                    <a href="#"><FiTwitter /></a>
                    <a href="#"><FiInstagram /></a>
                    <a href="#"><FiGithub /></a>
                </div>
            </div>
        </header>
    )
}

export default Navbar
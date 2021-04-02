import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FiTwitter, FiInstagram, FiGithub } from 'react-icons/fi'
import { useRef } from 'react'
import style from '../styles/Navbar.module.scss'
import { useRouter } from 'next/router'

const Navbar = () => {
    const mobileNav = useRef()
    const menuBtn = useRef()
    const closeBtn = useRef()
    const nav = useRef()

    const handleMenuBtn = () => {
        if(mobileNav.current.classList.contains('mobile-active')) {
            document.querySelector('body').classList.remove('body-no-scroll');
        } else {
            document.querySelector('body').classList.add('body-no-scroll');
        }
        mobileNav.current.classList.toggle('mobile-active');
        menuBtn.current.classList.toggle('btnActive');
        closeBtn.current.classList.toggle('btnActive');
    }

    return (
        <header className={style.header}>
            <nav className="container" ref={nav}>
                <h1>
                    <a href="/">Rudra Nil Utsa</a>
                </h1>
                <LinkList />
                <button onClick={handleMenuBtn} className={`${style.menuBtn} btnActive`} ref={menuBtn}><AiOutlineMenu /></button>
                <button onClick={handleMenuBtn} className={style.closeBtn} ref={closeBtn}><AiOutlineClose /></button>
            </nav>
            <div className={style.mobileNav} ref={mobileNav}>
                <LinkList />
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

const LinkList = () => {
    const router = useRouter();
    const handleClick = e => {
        e.preventDefault();
        router.push("/#talk")
    }
    return (
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/soft">Softwares</a></li>
            <li><a href="/about">About</a></li>
            <li><button onClick={handleClick} className="regular-btn">Get In Touch</button></li>
        </ul>
    )
}
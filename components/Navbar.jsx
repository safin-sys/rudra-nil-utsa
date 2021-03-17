import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FiTwitter, FiInstagram, FiGithub } from 'react-icons/fi'
import { useRef } from 'react'
import style from '../styles/Navbar.module.scss'
import Link from "next/link"
import { Router, useRouter } from 'next/router'

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
            <li><Link href="/">Home</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/soft">Softwares</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><button onClick={handleClick} className="regular-btn">Get In Touch</button></li>
        </ul>
    )
}
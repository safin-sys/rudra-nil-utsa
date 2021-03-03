import styled from 'styled-components'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FiTwitter, FiInstagram, FiGithub } from 'react-icons/fi'
import { useRef } from 'react';

const Header = styled.header`
    overflow: hidden;
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 64px;
        h1 {
            color: white;
            font-size: 1.2rem;
            white-space: nowrap;
        }
        ul {
            list-style: none;
            display: flex;
            align-items: center;
            gap: 2rem;
            user-select: none;
            li {
                cursor: pointer;
                a {
                    color: white;
                    text-decoration: none;
                    font-weight: bold;
                }
                svg {
                    color: white;
                }
            }
        }
        .menu-btn,
        .close-btn {
            display: none;
            width: 1.5rem;
            height: 1.5rem;
            background: none;
            border: none;
            svg {
                fill: white;
                width: 100%;
                height: 100%;
            }
        }
    }
    #btn {
        cursor: pointer;
        color: white;
        background: none;
        padding: .4rem 1rem;
        white-space: nowrap;
        border: 2px solid;
        border-image-slice: 1;
        border-width: 2px;
        border-image-source: linear-gradient(to left, #00C853, #B2FF59);
    }
    button:focus {
        outline: none;
    }
    .mobile-nav {
        position: fixed;
        padding-top: 7rem;
        height: calc(100vh - 64px);
        width: 100%;
        left: 50%;
        transform: translateX(50%);
        background-color: #030302;
        transition: all .2s ease-in-out;
        ul {
            height: 300px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            li {
                a {
                    text-decoration: none;
                    color: white;
                    font-weight: bold;
                }
            }
        }
        .social {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            margin-top: 2rem;
            a {
                color: white;
                svg {
                    width: 1rem;
                    height: 1rem;
                }
            }
        }
    }
    @media (max-width: 768px) {
        nav {
            ul {
                display: none;
            }
            .active {
                display: block;
                transform: translateX(0);
            }
        }
        .mobile-active {
            transform: translateX(-50%);
        }
    }
`;

const Navbar = () => {
    const mobileNav = useRef()
    const menuBtn = useRef()
    const closeBtn = useRef()
    const nav = useRef()

    const handleMenuBtn = () => {
        document.querySelector('body').classList.toggle('body-no-scroll');
        mobileNav.current.classList.toggle('mobile-active');
        menuBtn.current.classList.toggle('active');
        closeBtn.current.classList.toggle('active');
    }

    return (
        <Header>
            <nav className="container" ref={nav}>
                <h1>
                    Rudra Nil Utsha
                </h1>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Softwares</a></li>
                    <li><a href="#">About</a></li>
                    <li><button id="btn">Get In Touch</button></li>
                </ul>
                <button onClick={handleMenuBtn} className="menu-btn active" ref={menuBtn}><AiOutlineMenu /></button>
                <button onClick={handleMenuBtn} className="close-btn" ref={closeBtn}><AiOutlineClose /></button>
            </nav>
            <div className="mobile-nav" ref={mobileNav}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Softwares</a></li>
                    <li><a href="#">About</a></li>
                    <li><button id="btn">Get In Touch</button></li>
                </ul>
                <div className="social">
                    <a href="#"><FiTwitter /></a>
                    <a href="#"><FiInstagram /></a>
                    <a href="#"><FiGithub /></a>
                </div>
            </div>
        </Header>
    )
}

export default Navbar
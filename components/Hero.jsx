import style from '../styles/index/Hero.module.scss'
import { BiCoffee } from 'react-icons/bi'
import { useRouter } from 'next/router'

export default function Hero() {
    const router = useRouter();
    const handleClick = e => {
        e.preventDefault();
        router.push("/#love")
    }
    return (
        <div className={`${style.heroContainer} container`}>
            <h1 className="gradientTitle">Hello Guys! <br/> I'm Rudra.</h1>
            <button onClick={handleClick} className="regular-btn"><BiCoffee />Explore</button>
        </div>
    )
} 
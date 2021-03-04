import style from '../styles/index/Hero.module.scss'
import { BiCoffee } from 'react-icons/bi'

export default function Hero() {
    return (
        <div className={`${style.heroContainer} container`}>
            <h1>Hello Guys! <br/> I'm Rudra.</h1>
            <button className="regular-btn"><BiCoffee />Explore</button>
        </div>
    )
} 
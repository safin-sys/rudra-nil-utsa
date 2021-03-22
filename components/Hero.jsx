import style from '../styles/Hero.module.scss'
import { BiCoffee } from 'react-icons/bi'
import { useRouter } from 'next/router'

export default function Hero({ title, btn }) {
    const router = useRouter();
    const handleClick = e => {
        e.preventDefault();
        router.push("/#love")
    }
    return (
        <div className={`${style.heroContainer} container`}>
            <h1 className="gradientTitle">{title}</h1>
            {btn && <button onClick={handleClick} className="regular-btn"><BiCoffee />{btn}</button>}
        </div>
    )
} 
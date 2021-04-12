import style from "../styles/index/Order.module.scss"
import { AiOutlineStar } from 'react-icons/ai'
import { useRouter } from 'next/router'

const Order = ({ packs }) => {
    return (
        <div className={`${style.orderCon} container`}>
            <header>
                <h1>{packs.title}</h1>
                <p>{packs.des}</p>
            </header>
            <main>
                {packs.packageList.map((pack, i) => {
                    return <Cards key={i} name={pack.packageName} des={pack.description} price={pack.price} words={pack.words} currency={pack.currency} />
                })}
            </main>
        </div>
    )
}

export default Order

const Cards = ({name, des, price, words, currency}) => {
    const router = useRouter();
    const handleClick = e => {
        e.preventDefault();
        router.push("/#talk")
    }
    return (
        <div className={style.card}>
            <AiOutlineStar />
            <h1 className={style.title}>{name}</h1>
            <h1 className={style.price}>{price}{currency} / {words}</h1>
            <p>{des}</p>
            <button onClick={handleClick} className="regular-btn">Order Now</button>
        </div>
    )
}
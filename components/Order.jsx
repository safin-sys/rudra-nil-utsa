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
                    return <Cards key={i} i={i} name={pack.packageName} des={pack.description} price={pack.price} words={pack.words} currency={pack.currency} />
                })}
            </main>
        </div>
    )
}

export default Order

const Cards = ({name, des, price, words, currency, i}) => {
    const router = useRouter();
    const handleClick = e => {
        e.preventDefault();
        router.push("/#talk")
    }
    const handleStar = () => {
        let output = []
        for (let index = 0; index < i + 1; index++) {
            output.push(<AiOutlineStar key={index} />)
        }
        return output
    }
    return (
        <div className={style.card}>
            {handleStar()}
            <h1 className={style.title}>{name}</h1>
            <h1 className={style.price}>{price}{currency} / {words}</h1>
            <p>{des}</p>
            <button onClick={handleClick} className="regular-btn">Order Now</button>
        </div>
    )
}
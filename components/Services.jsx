import { useEffect, useState } from 'react'
import style from '../styles/index/Services.module.scss'
import { AiOutlineWindows, AiOutlineMobile, AiOutlinePaperClip } from 'react-icons/ai'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        setServices([
            {
                name: "Windows Applications",
                icon: AiOutlineWindows,
                des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem labore veritatis similique maxime excepturi officia."
            },
            {
                name: "Articles for your website",
                icon: AiOutlinePaperClip,
                des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem labore veritatis similique maxime excepturi officia."
            },
            {
                name: "Android Apps",
                icon: AiOutlineMobile,
                des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem labore veritatis similique maxime excepturi officia."
            },
        ]);
    }, [])
    return (
        <div className={`${style.servicesCon} container`}>
            <header>
                <h1>My Services</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sed deserunt.</p>
            </header>
            <main>
                {services.map((service, i) => {
                return <Cards key={i} icon={service.icon} name={service.name} des={service.des} />
                })}
            </main>
        </div>
    )
}

export default Services

const Cards = ({name, icon, des}) => {
    return (
        <div className={style.card}>
            {icon()}
            <h1>{name}</h1>
            <p>{des}</p>
        </div>
    )
}
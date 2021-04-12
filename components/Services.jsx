import style from '../styles/index/Services.module.scss'
import { AiOutlineWindows, AiOutlineMobile, AiOutlinePaperClip } from 'react-icons/ai'

const icons = [
    AiOutlineWindows,
    AiOutlinePaperClip,
    AiOutlineMobile
]

const Services = ({ services }) => {
    return (
        <div className={`${style.servicesCon} container`}>
            <header>
                <h1>{services.title}</h1>
                <p>{services.des}</p>
            </header>
            <main>
                {services.list.map((service, i) => {
                return <Cards key={i} icon={icons[i]} name={service.serviceName} des={service.description} />
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
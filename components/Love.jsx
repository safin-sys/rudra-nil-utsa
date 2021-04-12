import style from '../styles/index/Love.module.scss'
import { Circle } from 'rc-progress'

const Love = ({ skills }) => {   
    return (
        <section id="love" className={style.loveContainer}>
            <header>
                <h1>{skills.title}</h1>
                <p>{skills.des}</p>
            </header>
            <div className={style.skills}>
                {skills.skillList.map((skill, i) => {
                    return <Skills key={i} name={skill.title} percent={skill.percent} />
                })}
            </div>
        </section>
    )
}

export default Love

const Skills = ({name, percent}) => {
    return (
        <div className={style.circleCon}>
            <Circle percent={percent} strokeWidth="8" trailWidth="8" trailColor="#161616" strokeColor="#74FE48" strokeLinecap="butt" />
            <h2>{percent}<span>%</span></h2>
            <h1>{name}</h1>
        </div>
    )
}
import { useEffect, useState } from 'react'
import style from '../styles/index/Love.module.scss'
import { Circle } from 'rc-progress'

const Love = () => {
    const [skills] = useState(
        [
            {
                name: "Programming",
                percent: 60
            },
            {
                name: "Content Writing",
                percent: 80
            },
            {
                name: "Video Editing",
                percent: 20
            },
        ]
    )
    return (
        <section className={style.loveContainer}>
            <header>
                <h1>Skills</h1>
                <p>
                    There is no difference between my skills and what I actually love doing. Here's what I love doing or my skills at a glance.
                </p>
            </header>
            <div className={style.skills}>
                {skills.map((skill, i) => {
                    return <Skills key={i} name={skill.name} percent={skill.percent} />
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
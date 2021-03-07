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
                <h1>This Is What I Love Doing</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti quasi corporis odit ad ea recusandae asperiores perspiciatis quaerat.</p>
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
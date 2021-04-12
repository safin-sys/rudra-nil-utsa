import style from '../styles/index/Talk.module.scss'
import { AiOutlineSend } from 'react-icons/ai'

const Talk = ({ title, des }) => {
    return (
        <div className={`${style.talk} container`}>
            <div className={style.talkCon}>
                <header>
                    <div className={style.hline}></div>
                    <h1>{title}</h1>
                    <p>{des}</p>
                </header>
                
                <form name="contact-form" method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact-form" />
                    <input name="name" type="text" placeholder="Name" required />
                    <input name="email" type="email" placeholder="Email" required />
                    <textarea name="message" id="msg" placeholder="Message" required ></textarea>
                    <button type="submit">Send<AiOutlineSend /></button>
                </form>
            </div>
        </div>
    )   
}

export default Talk
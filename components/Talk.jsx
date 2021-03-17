import style from '../styles/index/Talk.module.scss'
import { AiOutlineSend } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Talk = () => {
    const notify = () => {
        toast.dark("👍 Message Sent Successfully", {
            position: toast.POSITION.BOTTOM_LEFT
        })
    }
    const handleSubmit = () => {
        notify();
    }
    return (
        <div id="talk" className={`${style.talk} container`}>
            <div className={style.talkCon}>
                <header>
                    <div className={style.hline}></div>
                    <h1>Let's Talk?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, doloremque amet. Sint, blanditiis omnis.</p>
                </header>
                
                <form onSubmit={handleSubmit} name="contact-form" method="POST" data-netlify="true">
                    <input type="hidden" name="form-name" value="contact-form" />
                    <input name="name" type="text" placeholder="Name" required />
                    <input name="email" type="email" placeholder="Email" required />
                    <textarea name="message" id="msg" placeholder="Message" required ></textarea>
                    <button type="submit">Send<AiOutlineSend /></button>
                </form>
            </div>
            <ToastContainer />
        </div>
    )   
}

export default Talk
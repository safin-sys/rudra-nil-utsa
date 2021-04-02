import style from '../styles/Divider.module.scss'

const Divider = ({ direction, id }) => {
    const directionHandler = () => {
       if (direction === 'right') {
           return {
               right: 0
           }
       } else if (direction === 'left') {
           return {
               left: 0
           }
       } else {
           return {
               right:0
           }
       }
    }

    return (
        <div id={id} className={style.dividerCon}>
            <div className={style.vline}></div>
            <div style={directionHandler()} className={style.hline}></div>
        </div>
    )
}

export default Divider
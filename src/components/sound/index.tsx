import style from './index.module.css';
import iconeSound from '../../assets/icons/volume-full-solid-240.png'

function Sound(){
    return(
        <main className={style.main}>
            <img src={iconeSound} width={"20px"} alt="" />
            <input className={style.inputRange} type="range" />
        </main>
    )
}

export default Sound
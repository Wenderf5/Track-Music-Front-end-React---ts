import style from './index.module.css';
import Next from '../../assets/icons/skip-next-regular-240.png';
import Pause from '../../assets/icons/pause-circle-regular-240.png';
import Play from '../../assets/icons/play-circle-regular-240.png';
import Back from '../../assets/icons/skip-previous-regular-240.png';

function MultiMedia(){
    return(
        <main className={style.main}>
            <div className={style.containerOP}>
                <img src={Back} width={"33px"} alt="Back" />
                <img src={Pause} width={"33px"} alt="Play/Pause" />
                <img src={Next} width={"33px"} alt="Next" />
            </div>
            <div className={style.containerTime}>
                <input className={style.inputRange} type="range" min="0" max="100" />
            </div>
        </main>
    )
}

export default MultiMedia
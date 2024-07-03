import style from './index.module.css';
import iconePlay from '../../assets/icons/play-regular-240.png';
import iconePause from '../../assets/icons/pause-regular-240.png';
import iconePlus from '../../assets/icons/plus-regular-240.png';
import iconeDeezerActive from '../../assets/icons/deezer-logo-active-240.png';
import iconeDeezer from '../../assets/icons/deezer-logo-240.png';

interface props {
    img: any
}

function TopMusic(props: props) {
    return (
        <main className={style.main}>
            <div className={style.imgMusic}>
                <img width={"100%"} height={"100%"} style={{ borderRadius: "3px" }} src={props.img} alt="Musica" />
            </div>
            <div className={style.divInfo}>
                <span>Paranoid</span>
                <span className={style.groupName}>Black Sabbath</span>
            </div>
            <div className={style.divMultMedia}>
                <img src={iconePlus} width={"25px"} style={{ cursor: "pointer" }} alt="Adicionar a playlist" />
                <img src={iconePlay} width={"25px"} style={{ cursor: "pointer" }} alt="Play" />
                <img src={iconeDeezer} width={"23px"} style={{ cursor: "pointer" }} alt="Tocando" />
            </div>
        </main>
    )
}

export default TopMusic
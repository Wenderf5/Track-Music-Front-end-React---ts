import style from './index.module.css';
import capa1 from '../../assets/img/Capas/500x500-000000-80-0-0.jpg';
import capa2 from '../../assets/img/Capas/500x500-000000-80-0-0 (1).jpg';
import capa3 from '../../assets/img/Capas/500x500-000000-80-0-0 (2).jpg';
import capa4 from '../../assets/img/Capas/500x500-000000-80-0-0 (3).jpg';
import capa5 from '../../assets/img/Capas/500x500-000000-80-0-0 (4).jpg';
import capa6 from '../../assets/img/Capas/500x500-000000-80-0-0 (5).jpg';

function MusicMenu() {
    return (
        <main className={style.main}>
            <div className={style.containerFt}>
                <img src={capa6} width={"100%"} height={"100%"} style={{borderRadius: "4px"}}alt="" />
            </div>
            <div className={style.containerMusicName}>
                <span>Heaven and Hell</span>
                <span className={style.txtGroupName}>Black sabbath</span>
            </div>
        </main>
    )
}

export default MusicMenu
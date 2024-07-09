import style from './index.module.css';
import capa6 from '../../../../assets/img/Capas/500x500-000000-80-0-0 (5).jpg';

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
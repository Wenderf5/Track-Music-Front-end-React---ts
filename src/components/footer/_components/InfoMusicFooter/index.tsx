import style from './index.module.css';

import capa from '../../../../assets/img/Capas/500x500-000000-80-0-0 (4).jpg';

export function InfoMusicFooter() {
    return (
        <main className={style.mian}>
            <img className={style.img} src={capa} alt="" />
            <div className={style.container_info_txt}>
                <span className={style.music_name}>Music Name</span>
                <span className={style.artist_name}>Artist Name</span>
            </div>
        </main>
    )
}
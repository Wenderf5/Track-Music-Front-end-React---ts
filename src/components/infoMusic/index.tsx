import style from './index.module.css';

import capa from '../../assets/img/Capas/500x500-000000-80-0-0 (5).jpg'

export function InfoMusic() {
    return (
        <main className={style.main}>
            <div className={style.container_img}>
                <img className={style.img} src={capa} alt="" />
            </div>
            <div className={style.info_music_txt}>
                <span className={style.music_name_txt}>Music Name</span>
                <span className={style.artist_name_txt}>Artist Name</span>
                <span className={style.album_name_txt}>Album: Album Name</span>
            </div>
        </main>
    )
}
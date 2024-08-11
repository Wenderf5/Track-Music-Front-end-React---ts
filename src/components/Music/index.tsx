import style from './index.module.css';
import { Button } from './_components/Button';

import iconPlay from '../../assets/icons/play-regular-240.png';
import iconPause from '../../assets/icons/pause-regular-240.png';
import iconDeezer from '../../assets/icons/deezer-logo-240.png';
import iconDeezerActive from '../../assets/icons/deezer-logo-active-240.png';

interface props {
    capa: string;
}

export function Music({ capa }: props) {
    return (
        <main className={style.main}>
            <div className={style.container_info}>
                <img src={capa} alt="" width={57} style={{ borderRadius: "5px" }} />
                <div className={style.container_info_txt}>
                    <span className={style.music_name}>Music Name</span>
                    <span className={style.artist_name}>Artist Name</span>
                </div>
            </div>
            <div className={style.container_btn}>
                <Button icon={iconPlay} />
                <Button icon={iconDeezer} />
            </div>
        </main>
    )
}
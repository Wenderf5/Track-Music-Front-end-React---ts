//CSS
import style from './index.module.css';

//Hooks
import { useContext } from 'react';

//Context
import { CurrentMusicContext } from '../../../../context/currentMusic';

//Components
import { Button } from './_components/button';

//Icons
//import iconPause from '../../../../assets/icons/pause.png';
import iconPlay from '../../../../assets/icons/play.png';
import capa from '../../../../assets/img/Capas/500x500-000000-80-0-0 (5).jpg';

export function InfoMusicFooter() {
    const currentMusicContext = useContext(CurrentMusicContext);
    if (!currentMusicContext) {
        return "Erro no contexto 'CurrentMusicContext' src/components/Footer/_components/InfoMusicFooter linha 13.";
    }
    const { currentMusic } = currentMusicContext;

    return (
        <main className={style.main}>
            <img className={style.img} src={currentMusic?.album.cover_big ? currentMusic?.album.cover_big : capa} alt="" />
            <div className={style.container_info_txt}>
                <span className={style.music_name}>{currentMusic?.title ? currentMusic?.title : "Highway to hell" }</span>
                <span className={style.artist_name}>{currentMusic?.artist.name ? currentMusic?.artist.name : "AC/DC"}</span>
            </div>
            <div className={style.container_btn_mobile}>
                <Button icon={iconPlay} />
            </div>
        </main>
    )
}
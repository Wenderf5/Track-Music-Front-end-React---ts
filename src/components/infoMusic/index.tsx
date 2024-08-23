import style from './index.module.css';
import { useContext } from 'react';
import { CurrentMusicContext } from '../../context/currentMusic';

import capa from '../../assets/img/Capas/500x500-000000-80-0-0 (5).jpg'

export function InfoMusic() {
    const currentMusicContext = useContext(CurrentMusicContext);
    if (!currentMusicContext) {
        return "Erro no contexto 'CurrentMusicContext' src/components/Footer/_components/InfoMusicFooter linha 13.";
    }
    const { currentMusic } = currentMusicContext;

    return (
        <main className={style.main}>
            <div className={style.container_img}>
                <img className={style.img} src={currentMusic?.album.cover_big ? currentMusic?.album.cover_big : capa} alt="" />
            </div>
            <div className={style.info_music_txt}>
                <span className={style.music_name_txt}>{currentMusic?.title ? currentMusic?.title : "Highway to hell"}</span>
                <span className={style.artist_name_txt}>{currentMusic?.artist.name ? "Artista: " + currentMusic?.artist.name : "AC/DC"}</span>
                <span className={style.album_name_txt}>{currentMusic?.album.title ? "Álbum: " + currentMusic?.album.title : "Highway to Hell"}</span>
            </div>
        </main>
    )
}
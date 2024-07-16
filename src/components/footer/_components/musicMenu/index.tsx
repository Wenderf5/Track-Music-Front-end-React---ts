import style from './index.module.css';
import { useContext } from 'react';
import { CurrentMusicContext } from '../../../../context/currentMusic';
import capa6 from '../../../../assets/img/Capas/500x500-000000-80-0-0 (5).jpg';

function MusicMenu() {
    const music = useContext(CurrentMusicContext);
    if (!music) {
        throw new Error('Erro no contexto "music" MusicMenu linha 9.');
    }
    const { currentMusic } = music;

    return (
        <main className={style.main}>
            <div className={style.containerFt}>
                <img src={currentMusic ? currentMusic.album.cover_big : capa6} width={"100%"} height={"100%"} style={{ borderRadius: "4px" }} alt="" />
            </div>
            <div className={style.containerMusicName}>
                <span>{currentMusic ? currentMusic.title : "Heaven and Hell"}</span>
                <span className={style.txtGroupName}>{currentMusic ? currentMusic.artist.name : "Black sabbath"}</span>
            </div>
        </main>
    )
}

export default MusicMenu
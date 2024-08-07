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
            <img src={currentMusic ? currentMusic.album.cover_big : capa6} width={"13%"} style={{ borderRadius: "4px", marginLeft: "1%" }} alt="Imagem da musica" />
            <div className={style.containerMusicName}>
                <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{currentMusic ? currentMusic.title : "Highway to Hell"}</span>
                <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }} className={style.txtGroupName}>{currentMusic ? currentMusic.artist.name : "AC/DC"}</span>
            </div>
        </main>
    )
}

export default MusicMenu
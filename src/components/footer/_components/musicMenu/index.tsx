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
            <img src={currentMusic ? currentMusic.album.cover_big : capa6} width={60} style={{ borderRadius: "4px" }} alt="Imagem da musica" />
            <div className={style.container_music_name}>
                <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", width: "100%" }}>{currentMusic ? currentMusic.title : "Highway to Hell"}</span>
                <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", width: "100%" }} className={style.txt_group_name}>{currentMusic ? currentMusic.artist.name : "AC/DC"}</span>
            </div>
        </main>
    )
}

export default MusicMenu
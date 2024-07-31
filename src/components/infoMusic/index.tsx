import style from './index.module.css';
import Buttom from '../button';
import { ChevronDown } from 'lucide-react';
import { useContext } from 'react';
import { CurrentMusicContext } from '../../context/currentMusic';

interface props {
    img: any
}

function InfoMusic({ img }: props) {
    const currentMusicContext = useContext(CurrentMusicContext);
    if (!currentMusicContext) {
        throw new Error('Erro no contexto "currentMusicContext" InfoMusic linha 14.');
    }
    const { currentMusic } = currentMusicContext;


    return (
        <main className={style.main}>
            <div className={style.imgMusic}>
                <img src={!currentMusic ? img : currentMusic.album.cover_big} width={"100%"} height={"100%"} style={{ borderRadius: "10px" }} alt="Music foto" />
            </div>
            <div className={style.text}>
                <span className={style.bandaName}>{!currentMusic ? 'Nome do artista' : currentMusic.artist.name}</span>
                <span className={style.infoMusic}>{!currentMusic ? 'Nome da musica' : currentMusic.title}</span>
            </div>
            <div className={style.text}>
                <span className={style.infoMusic}>Album: {!currentMusic ? 'Nome do Album' : currentMusic.album.title}</span>
            </div>
            <div className={style.text}>
                <span className={style.verAlbum}>Ver Album <Buttom type='viewMore' icone={<ChevronDown color='#999999' />} /></span>
            </div>
        </main>
    )
}

export default InfoMusic


import style from './index.module.css';
import Buttom from '../button';
import { ChevronDown } from 'lucide-react';
import { useContext } from 'react';
import { CurrentMusicContext } from '../../context/currentMusic';

interface props {
    img: any
}

function InfoMusic(props: props) {
    const currentMusicContext = useContext(CurrentMusicContext);
    if (!currentMusicContext) {
        throw new Error("Erro no context");
    }
    const { track } = currentMusicContext;


    return (
        <main className={style.main}>
            <div className={style.imgMusic}>
                <img src={!track ? props.img : track.album.cover_big} width={"100%"} height={"100%"} style={{ borderRadius: "10px" }} alt="" />
            </div>
            <div className={style.text}>
                <span className={style.bandaName}>{!track ? 'alguma coisa' : track.artist.name}</span>
                <span className={style.infoMusic}>{!track ? 'alguma coisa' : track.title}</span>
            </div>
            <div className={style.text}>
                <span className={style.infoMusic}>Album: {!track ? 'alguma coisa' : track.album.title}</span>
                <span className={style.infoMusic}>Data de lançamento: 18/03/2005</span>
            </div>
            <div className={style.text}>
                <span className={style.verAlbum}>Ver Album <Buttom type='viewMore' icone={<ChevronDown color='#999999' />} /></span>
            </div>
        </main>
    )
}

export default InfoMusic


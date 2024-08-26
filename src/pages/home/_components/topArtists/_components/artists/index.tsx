//CSS
import style from './index.module.css';

//Interfaces
import { interfaceTopArtist } from '../../../../../../types/topArtist';

interface props {
    artist: interfaceTopArtist;
}

export function Artists({ artist }: props) {
    return (
        <main className={style.main}>
            <img className={style.img} src={artist.picture} alt="" />
            <span className={style.artist_name} >{artist.name}</span>
        </main>
    )
}
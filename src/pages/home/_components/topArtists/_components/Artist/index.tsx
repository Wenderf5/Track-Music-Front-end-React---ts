import style from './index.module.css';
import { interfaceTopArtists } from '../../../../../../types/topArtists';

interface props {
    artist: interfaceTopArtists
}

function Artist({ artist }: props) {
    return (
        <main className={style.main}>
            <div className={style.ftArtist}>
                <img src={artist.picture} style={{ width: "100%", borderRadius: "50%" }} alt="" />
            </div>
            <p style={{ cursor: "pointer" }}>{artist.name}</p>
        </main>
    )
}

export default Artist
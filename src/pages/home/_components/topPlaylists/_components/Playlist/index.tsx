import style from './index.module.css';
import { interfaceTopPlaylists } from '../../../../../../types/topPlaylists';

interface props {
    playlist: interfaceTopPlaylists
}

function Playlist({ playlist }: props) {
    return (
        <main className={style.main}>
            <div className={style.ftPlaylist}>
                <img src={playlist.picture} style={{ width: "100%", borderRadius: "6px" }} alt="" />
            </div>
            <p style={{ cursor: "pointer", textDecoration: "none"}}>{playlist.title}</p>
        </main>
    )
}

export default Playlist
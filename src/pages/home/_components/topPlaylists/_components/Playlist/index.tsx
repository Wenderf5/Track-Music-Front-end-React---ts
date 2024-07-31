import style from './index.module.css';
import { interfaceTopPlaylists } from '../../../../../../types/topPlaylists';

interface props {
    playlist: interfaceTopPlaylists
}

function Playlist({ playlist }: props) {
    return (
        <main className={style.main}>
            <div className={style.ftPlaylist}>
                <img
                    className={style.playlistFt}
                    src={playlist.picture}
                    alt="" />
            </div>
            <p style={{
                cursor: "pointer",
                overflow: 'hidden',
                whiteSpace: "nowrap",
                width: "80%",
                textOverflow: "ellipsis",
                textAlign: "center"
            }}>{playlist.title}</p>
        </main>
    )
}

export default Playlist
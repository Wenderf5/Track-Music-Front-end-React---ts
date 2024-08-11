import style from './index.module.css';
import { interfaceTopPlaylists } from '../../../../../../types/topPlaylists';

interface props {
    playlist: interfaceTopPlaylists
}

function Playlist({ playlist }: props) {
    return (
        <main className={style.main}>
            <img
                className={style.playlist_ft}
                src={playlist.picture}
                alt="Foto da playlist"
            />
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
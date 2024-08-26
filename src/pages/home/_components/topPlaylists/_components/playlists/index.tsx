import style from './index.module.css';
import { interfaceTopPlaylists } from '../../../../../../types/topPlaylists';

interface props {
    playlist: interfaceTopPlaylists;
}

export function Playlists({ playlist }: props) {
    return (
        <main className={style.main}>
            <img className={style.img} src={playlist.picture} alt="" />
            <span className={style.playlist_name} >{playlist.title}</span>
        </main>
    )
}
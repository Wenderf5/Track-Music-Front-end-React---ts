import style from './index.module.css';
import { useContext } from 'react';
import { PlaylistContext } from '../../../../../../context/playlist';
import { interfaceTrack } from '../../../../../../types/track';

interface props {
    playlist: any;
    track: interfaceTrack | undefined;
}
function Playlist({ playlist, track }: props) {
    const playlistContext = useContext(PlaylistContext);
    if (!playlistContext) {
        throw new Error("Erro no context 'Music/SuspenseMenu/Playlist' linha 10");
    }
    const { playlists } = playlistContext;

    function addMusicPlaylist() {
        for (let i = 0; i < playlists.length; i++) {
            if (playlists[i].id === playlist.id) {
                const musics = playlists[i].musics;
                musics.push(track as interfaceTrack);
            }
            console.log(playlists[i]);
        }
    }

    return (
        <main>
            <div className={style.playlist} onClick={addMusicPlaylist}>{playlist.playlistName}</div>
        </main>
    )
}

export default Playlist;
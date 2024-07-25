import Playlist from './_components/playlist';
import style from './index.module.css';
import { Ban } from 'lucide-react';
import { useContext } from 'react';
import { PlaylistContext } from '../../../../context/playlist';
import { interfaceTrack } from '../../../../types/track';

interface props {
    track: interfaceTrack | undefined;
}
function SuspenseMenu({ track }: props) {
    const playlistContext = useContext(PlaylistContext);
    if (!playlistContext) {
        throw new Error("Erro no context 'Playlist' linha 10");
    }
    const { playlists } = playlistContext;
    return (
        <main className={style.main}>
            {playlists.length < 0 && (
                <div className={style.empty}><Ban />Nenhuma Playlist</div>
            )}
            {
                playlists.map((playlist, index) => (
                    <Playlist key={index} playlist={playlist} track={track} />
                ))
            }
        </main>
    )
}

export default SuspenseMenu;
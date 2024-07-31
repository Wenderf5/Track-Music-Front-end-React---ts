import style from './index.module.css';
import { useState, useContext } from 'react';
import { ListVideo, ListX, Plus } from 'lucide-react';
import Buttom from '../button';
import Playlist from './_components/playlist';
import NewPlaylist from './_components/newPlaylist';
import { PlaylistContext } from '../../context/playlist';
import { Link } from 'react-router-dom';

function Playlists() {
    const [expanded, setExpanded] = useState<boolean>(false);
    const [newPlaylistIsVisible, setNewPlaylistIsVisible] = useState<boolean>(false);

    const playlistContext = useContext(PlaylistContext);
    if (!playlistContext) {
        throw new Error("Erro no contexto playlists linha 20");
    }
    const { playlists } = playlistContext;

    return (
        <div className={expanded ? style.playlistBarExpanded : style.playlistBar}>
            <div className={expanded ? style.myPlaylistsExpanded : style.myPlaylists}>
                {expanded && (<span className={style.myPlayliststxt}>Minhas playlists</span>)}
                <div className={style.btns}>
                    {expanded && (
                        <div onClick={() => setNewPlaylistIsVisible(!newPlaylistIsVisible)}>
                            <Buttom type='playlist' icone={<Plus color='#989898' size={30} style={{ marginTop: "3px" }} />} />
                        </div>
                    )}
                    <div className={expanded ? style.containerbtnPlaylistbarExpanded : style.containerbtnPlaylistbar} onClick={() => { setExpanded(!expanded); setNewPlaylistIsVisible(false) }}>
                        <Buttom type='playlist' icone={expanded ? <ListX color='#989898' size={35} /> : <ListVideo color='#989898' size={35} />} />
                    </div>
                </div>
            </div>
            {newPlaylistIsVisible && (
                <NewPlaylist newPlaylistIsVisible={newPlaylistIsVisible} setNewPlaylistIsVisible={setNewPlaylistIsVisible} />
            )}
            <div className={expanded ? style.divPlaylistExpanded : style.divPlaylist}>
                {playlists.map((playlist) => (
                    <Link key={playlist.id} to={`/myPlaylist/${playlist.id}`} style={{ textDecoration: "none", width: "100%" }}>
                        <Playlist expanded={expanded} playlist={playlist} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Playlists;

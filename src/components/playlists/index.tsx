import style from './index.module.css';
import { useState, useContext } from 'react';
import { ListVideo, ListX, Plus } from 'lucide-react';
import Buttom from '../button';
import Playlist from './_components/playlist';
import { PlaylistContext } from '../../context/playlist';

import capa1 from '../../assets/img/Capas/500x500-000000-80-0-0.jpg';
import capa2 from '../../assets/img/Capas/500x500-000000-80-0-0 (1).jpg';
import capa3 from '../../assets/img/Capas/500x500-000000-80-0-0 (2).jpg';
import capa4 from '../../assets/img/Capas/500x500-000000-80-0-0 (3).jpg';
import capa5 from '../../assets/img/Capas/500x500-000000-80-0-0 (4).jpg';
import capa6 from '../../assets/img/Capas/500x500-000000-80-0-0 (5).jpg';

function Playlists() {
    const [expanded, setExpanded] = useState<boolean>(false);

    const playlistContext = useContext(PlaylistContext);
    if (!playlistContext) {
        throw new Error("Erro no contexto playlists linha 20");
    }
    const { playlists } = playlistContext;

    function newPlaylist() {
        playlists.push({
            playlistName: "Playlist 2",
            id: 2,
            musics: [
                {
                    title: "Music Name",
                    Preview: "dwadwadawdawda",
                    artist: {
                        name: "Artist Name"
                    },
                    Album: {
                        title: "Album Name",
                        cover_big: "dawdadwa"
                    }
                }
            ]
        })
    }

    return (
        <div className={expanded ? style.playlistBarExpanded : style.playlistBar}>
            <div className={style.myPlaylists}>
                {expanded && (<span className={style.myPlayliststxt}>Minhas playlists</span>)}
                <div className={style.btns}>
                    {expanded && (
                        <div onClick={newPlaylist}>
                            <Buttom type='playlist' icone={<Plus color='#989898' size={30} style={{ marginLeft: "8px" }} />} />
                        </div>
                    )}
                    <div className={expanded ? style.containerbtnPlaylistbarExpanded : style.containerbtnPlaylistbar} onClick={() => setExpanded(!expanded)}>
                        <Buttom type='playlist' icone={expanded ? <ListX color='#989898' size={35} /> : <ListVideo color='#989898' size={35} style={{ marginLeft: "8px" }} />} />
                    </div>
                </div>
            </div>
            <div className={expanded ? style.divPlaylistExpanded : style.divPlaylist}>
                {playlists.map((playlist, index) => (
                    <Playlist img={capa6} expanded={expanded} key={index} playlist={playlist} />
                ))}
            </div>
        </div>
    )
}

export default Playlists
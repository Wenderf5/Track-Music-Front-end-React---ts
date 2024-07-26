import style from './index.module.css';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import capa2 from '../../assets/img/Capas/500x500-000000-80-0-0 (1).jpg';
import InfoMusic from '../../components/infoMusic';
import Playlists from '../../components/playlists';
import Footer from '../../components/footer';
import Music from '../../components/Music';
import InfoPlaylist from './infoPlaylist';
import { interfacePlaylist } from '../../types/playlist';
import { interfaceTrack } from '../../types/track';
import { PlaylistContext } from '../../context/playlist';

function MyPlaylist() {
    const { playlistID } = useParams();
    const [playlist, setPlaylist] = useState<any>();

    const playlistContext = useContext(PlaylistContext);
    if (!playlistContext) {
        throw new Error('Erro no contexto "myPlaylist" Music linha 20.');
    }
    const { playlists } = playlistContext;

    useEffect(() => {
        for (let i = 0; i < playlists.length; i++) {
            if (playlists[i].id == parseInt(playlistID as string, 10)) {
                setPlaylist(playlists[i]);
            }
        }
    }, [playlistID])

    return (
        <main className={style.page}>
            <div className={style.divPricipal}>
                <div className={style.containerPlaylist}>
                    <Playlists />
                </div>
                <div className={style.dashborad}>
                    <div className={style.divPlaylist}>
                        <InfoPlaylist
                            title={playlist?.playlistName}
                            creation_date={playlist?.creation_date}
                        //img={playlist?.picture}
                        />
                        <div className={style.divMusic}>
                            <span className={style.music}>Músicas:</span>
                            {playlist?.musics.map((track, index) => (
                                <Music key={index} track={track} />
                            ))}
                        </div>
                    </div>
                </div>
                <InfoMusic img={capa2} />
            </div>
            <Footer />
        </main>
    )
}

export default MyPlaylist
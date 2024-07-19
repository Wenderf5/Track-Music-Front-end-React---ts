import style from './index.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import capa2 from '../../assets/img/Capas/500x500-000000-80-0-0 (1).jpg';
import InfoMusic from '../../components/infoMusic';
import Playlists from '../../components/playlists';
import Footer from '../../components/footer';
import Music from '../../components/Music';
import InfoPlaylist from './_components/infoPlaylist';
import { interfacePlaylist } from '../../types/playlist';
import { interfaceTrack } from '../../types/track';

function Playlist() {
    const { playlistID } = useParams();
    const [playlist, setPlaylist] = useState<interfacePlaylist | undefined>(undefined);
    const [musics, setMusics] = useState<interfaceTrack[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const [playlistResponse, playlistMusicResponse] = await Promise.all([
                    fetch(`https://track-music-server.vercel.app/playlist/${playlistID}`, {
                        method: 'GET'
                    }),
                    fetch(`https://track-music-server.vercel.app/playlist-music/${playlistID}`, {
                        method: 'GET'
                    })
                ]);
                const dataPlaylist = await playlistResponse.json();
                const dataPlaylistMusic = await playlistMusicResponse.json();
                setMusics(dataPlaylistMusic);
                setPlaylist(dataPlaylist);
            } catch (error) {
                console.error('Erro ao buscar dados da playlist:', error);
            }
        }
        fetchData();
    }, [])

    return (
        <main className={style.page}>
            <div className={style.divPricipal}>
                <Playlists />
                <div className={style.dashborad}>
                    <div className={style.divPlaylist}>
                        <InfoPlaylist
                            title={playlist?.title}
                            creation_date={playlist?.creation_date}
                            creator={playlist?.creator?.name}
                            img={playlist?.picture}
                        />
                        <div className={style.divMusic}>
                            <span className={style.music}>Músicas:</span>
                            {musics.map((track, index) => (
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

export default Playlist
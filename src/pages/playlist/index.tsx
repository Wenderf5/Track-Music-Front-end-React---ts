import style from './index.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import capa2 from '../../assets/img/Capas/500x500-000000-80-0-0 (1).jpg';
import InfoMusic from '../../components/infoMusic';
import Playlists from '../../components/playlists';
import Footer from '../../components/footer';
import Music from '../../components/Music';
import InfoPlaylist from './_components/infoPlaylist';

function Playlist() {
    interface playlist {
        title?: string;
        creation_date: string;
        creator?: {
            name: string;
        };
        picture_big?: string;
    }

    const { playlistID } = useParams();
    const [playlist, setPlaylist] = useState<playlist | undefined>(undefined);
    const [musics, setMusics] = useState<[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://api.deezer.com/playlist/${playlistID}`, {
                    method: 'GET'
                });
                const data = await response.json();
                setMusics(data.tracks.data);
                setPlaylist(data);
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
                            img={playlist?.picture_big}
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
import style from './index.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import capa2 from '../../assets/img/Capas/500x500-000000-80-0-0 (1).jpg';
import InfoMusic from '../../components/infoMusic';
import Playlists from '../../components/playlists';
import Footer from '../../components/footer';
import Music from '../../components/Music';
import InfoArtist from './_components/infoArtist';
import { interfaceTrack } from '../../types/track';
import { interfaceArtists } from '../../types/artists';

function Artist() {
    const { artistID } = useParams();
    const [artist, setArtist] = useState<interfaceArtists | undefined>(undefined);
    const [musics, setMusics] = useState<interfaceTrack[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const [artistResponse, TracksResponse] = await Promise.all([
                    fetch(`https://track-music-server.vercel.app/artist/${artistID}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }),
                    fetch(`https://track-music-server.vercel.app/artist-musics/${artistID}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                ]);

                const artistData = await artistResponse.json();
                const TracksData = await TracksResponse.json();

                setArtist(artistData);
                setMusics(TracksData);
            } catch (error) {
                console.error('Erro ao buscar dados do artista:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <main className={style.page}>
            <div className={style.divPricipal}>
                <Playlists />
                <div className={style.dashborad}>
                    <div className={style.divPlaylist}>
                        <InfoArtist
                            name={artist?.name}
                            picture={artist?.picture}
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
    );
}

export default Artist;

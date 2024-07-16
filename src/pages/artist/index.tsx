import style from './index.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import capa2 from '../../assets/img/Capas/500x500-000000-80-0-0 (1).jpg';
import InfoMusic from '../../components/infoMusic';
import Playlists from '../../components/playlists';
import Footer from '../../components/footer';
import Music from '../../components/Music';
import InfoArtist from './_components/infoArtist';

interface ArtistData {
    name?: string;
    picture_big?: string;
}

interface Track {
    id: number;
    title: string;
}

function Artist() {
    const { artistID } = useParams();
    const [artist, setArtist] = useState<ArtistData | undefined>(undefined);
    const [musics, setMusics] = useState<Track[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const [artistResponse, TracksResponse] = await Promise.all([
                    fetch(`https://api.deezer.com/artist/${artistID}`),
                    fetch(`https://api.deezer.com/artist/${artistID}/top?limit=50`)
                ]);

                const artistData = await artistResponse.json();
                const TracksData = await TracksResponse.json();

                setArtist(artistData);
                setMusics(TracksData.data);
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
                            img={artist?.picture_big}
                        />
                        <div className={style.divMusic}>
                            <span className={style.music}>Músicas:</span>
                            {musics.map((track) => (
                                <Music key={track.id} track={track} />
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

//CSS
import style from './index.module.css';

//Interfaces
import { interfaceMusics } from '../../types/musics';
import { interfaceArtist } from '../../types/artist';

//Hooks
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//Components
import { Footer } from '../../components/Footer';
import { InfoMusic } from '../../components/InfoMusic';
import { Head } from './_components/Head';
import { Music } from '../../components/Music';
import { Loading } from '../../components/Loading';

export function Artist() {
    const { id } = useParams<{ id: string }>();

    const [artist, setArtist] = useState<interfaceArtist>();
    const [musics, setMusics] = useState<interfaceMusics[]>();

    useEffect(() => {
        async function fetchData() {
            try {
                const [artistResponse, TracksResponse] = await Promise.all([
                    fetch(`https://track-music-server.vercel.app/artist/${id}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }),
                    fetch(`https://track-music-server.vercel.app/artist-musics/${id}`, {
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
    }, [])

    if (!musics) {
        return (
            <main className={style.main}>
                <div className={style.container_principal}>
                    <section className={style.dashboard}>
                        <Loading />
                    </section>
                    <InfoMusic />
                </div>
                <Footer />
            </main>
        )
    }

    return (
        <main className={style.main}>
            <div className={style.container_principal}>
                <section className={style.dashboard}>
                    <Head artist={artist} />
                    <h1>Musicas:</h1>
                    <div className={style.container_musics}>
                        {musics?.map((item, index) => (
                            <Music key={index} music={item} />
                        ))}
                    </div>
                </section>
                <InfoMusic />
            </div>
            <Footer />
        </main>
    )
}
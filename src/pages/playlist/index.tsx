//CSS
import style from './index.module.css';

//Interfaces
import { interfaceMusics } from '../../types/musics';
import { interfacePlaylist } from '../../types/playlist';

//Hooks
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//Components
import { Footer } from '../../components/footer';
import { InfoMusic } from '../../components/infoMusic';
import { Head } from './_components/head';
import { Music } from '../../components/music';
import { Loading } from '../../components/loading';

export function Playlist() {
    const { id } = useParams<{ id: string }>();

    const [playlist, setPlaylist] = useState<interfacePlaylist>();
    const [musics, setMusics] = useState<interfaceMusics[]>();

    useEffect(() => {
        async function fetchData() {
            try {
                const [playlistResponse, TracksResponse] = await Promise.all([
                    fetch(`https://track-music-server.vercel.app/playlist/${id}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }),
                    fetch(`https://track-music-server.vercel.app/playlist-music/${id}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                ]);

                const playlistData = await playlistResponse.json();
                const TracksData = await TracksResponse.json();

                setPlaylist(playlistData);
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
                        <Loading/>
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
                    <Head playlist={playlist} />
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
import style from './index.module.css';
import Music from '../../../../components/Music';
import { useEffect, useState } from 'react';
import { interfaceTopMusics } from '../../../../types/topMusics';
import Loading from '../../../../components/loading';

function TopMusic() {
    const [musics, setMusics] = useState<interfaceTopMusics[] | null>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://track-music-server.vercel.app/top-music', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const data = await response.json();
                setMusics(data);
            } catch (error) {
                console.error('Erro ao buscar dados das top musicas:', error);
            }
        }
        fetchData();
    }, [])

    if (!musics) {
        return (
            <Loading />
        )
    }

    return (
        <main className={style.main}>
            <h1 style={{ overflow: 'hidden', whiteSpace: "nowrap" }}>Musicas em alta</h1>
            <div className={style.container_top_musics}>
                {musics.map((track, index) => (
                    <Music key={index} track={track} />
                ))}
            </div>
        </main>
    )
}

export default TopMusic;

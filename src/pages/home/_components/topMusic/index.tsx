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
        <div className={style.divTopMusics}>
            <h2>Musicas em alta</h2>
            <div className={style.containerTopMusics}>
                {musics?.map((track, index) => (
                    <Music key={index} track={track} />
                ))}
            </div>
        </div>
    )
}

export default TopMusic;

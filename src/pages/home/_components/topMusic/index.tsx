import style from './index.module.css';
import Music from '../../../../components/Music';
import { useEffect, useState } from 'react';
import { interfaceTopMusics } from '../../../../types/topMusics';

function TopMusic() {
    const [musics, setMusics] = useState<interfaceTopMusics[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://track-music-server.vercel.app/top-music', {
                    method: 'GET'
                })
                const data = await response.json();
                setMusics(data);
            } catch (error) {
                console.error('Erro ao buscar dados das top musicas:', error);
            }
        }
        fetchData();
    }, [])

    return (
        <div className={style.divTopMusics}>
            <h2>Musicas em alta</h2>
            <div className={style.containerTopMusics}>
                {musics.map((track, index) => (
                    <Music key={index} track={track} />
                ))}
            </div>
        </div>
    )
}

export default TopMusic;

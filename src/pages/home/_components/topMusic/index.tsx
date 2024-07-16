import style from './index.module.css';
import Music from '../../../../components/Music';
import { useEffect, useState } from 'react';

interface Track {
    id: number;
    title: string;
    artist: {
        name: string;
    };
    album: {
        cover_small: string;
    };
    preview: string;
}

function TopMusic() {
    const [musics, setMusics] = useState<Track[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://api.deezer.com/chart?limit=50', {
                    method: 'GET'
                })
                const data = await response.json();
                setMusics(data.tracks.data);
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

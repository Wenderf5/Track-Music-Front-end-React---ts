import style from './index.module.css';
import Music from '../../../Music';
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

function ContainerTopMusic() {
    const [musics, setMusics] = useState<Track[]>([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.deezer.com/chart', {
                method: 'GET'
            })
            const data = await response.json();
            setMusics(data.tracks.data);
        }
        fetchData()
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

export default ContainerTopMusic;

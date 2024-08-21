import style from './index.module.css';
import { useEffect, useState } from 'react';
import { Music } from '../../../../components/Music';
import { interfaceMusics } from '../../../../types/musics';

export function TopMusics() {
    const [topMusics, setTopMusics] = useState<interfaceMusics[] | undefined>(undefined);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://track-music-server.vercel.app/top-music`, {
                method: 'GET'
            });
            const data = await response.json();
            setTopMusics(data);
        }
        fetchData();
    }, [])

    return (
        <main className={style.main}>
            <h1>Musicas em alta</h1>
            <div className={style.container_top_musics}>
                {topMusics?.map((track, index) => (
                    <Music key={index} music={track} />
                ))}
            </div>
        </main>
    )
}
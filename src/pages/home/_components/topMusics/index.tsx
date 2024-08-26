//CSS
import style from './index.module.css';

//Hooks
import { useEffect, useState } from 'react';

//Components
import { Music } from '../../../../components/music';
import { Loading } from '../../../../components/loading';

//interfaces
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

    if (!topMusics) {
        return (
            <Loading />
        )
    }

    return (
        <main className={style.main}>
            <h1 className={style.top_musics_txt}>Musicas em alta</h1>
            <div className={style.container_top_musics}>
                {topMusics?.map((track, index) => (
                    <Music key={index} music={track} />
                ))}
            </div>
        </main>
    )
}
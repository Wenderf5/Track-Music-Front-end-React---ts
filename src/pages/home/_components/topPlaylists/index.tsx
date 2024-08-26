import style from './index.module.css';
import { useEffect, useState } from 'react';
import { interfaceTopPlaylists } from '../../../../types/topPlaylists';
import { Playlists } from './_components/playlists';
import { Loading } from '../../../../components/loading';
import { Link } from 'react-router-dom';

export function TopPlaylists() {
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [playlistsToShow, setPlaylistsToShow] = useState<interfaceTopPlaylists[] | undefined>(undefined);
    const [topPlaylists, setTopPlaylists] = useState<interfaceTopPlaylists[] | undefined>(undefined);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://track-music-server.vercel.app/top-playlist`, {
                    method: 'GET'
                });
                const data = await response.json();
                setTopPlaylists(data);
            } catch (error) {
                console.log("Erro ao buscar os artistas em alta: " + error)
            }
        }
        fetchData();
    }, [])

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        switch (true) {
            case width <= 1024 && width > 768:
                setPlaylistsToShow(topPlaylists?.slice(1));
                break;
            case width <= 768 && width > 500:
                setPlaylistsToShow(topPlaylists?.slice(2));
                break;
            case width <= 500 && width > 425:
                setPlaylistsToShow(topPlaylists?.slice(3));
                break;
            case width < 425:
                setPlaylistsToShow(topPlaylists?.slice(3));
                break;
            default:
                setPlaylistsToShow(topPlaylists);
                break;
        }
        return () => window.removeEventListener('resize', handleResize);
    }, [width, topPlaylists])

    if (!topPlaylists) {
        return (
            <Loading />
        )
    }

    return (
        <main className={style.main}>
            <h2 className={style.top_playlists_txt}>Playlists em alta</h2>
            <div className={style.container_top}>
                {playlistsToShow?.map((item, index) => (
                    <Link to={`/playlist/${item.id}`} key={item.id} className={style.link}>
                        <Playlists key={index} playlist={item} />
                    </Link>
                ))}
            </div>
        </main>
    )
}
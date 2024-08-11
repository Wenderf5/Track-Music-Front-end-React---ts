import style from './index.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Playlist from './_components/Playlist';
import Loading from '../../../../components/loading';
import { interfaceTopPlaylists } from '../../../../types/topPlaylists';

function TopPlaylists() {
    const [playlist, setPlaylist] = useState<interfaceTopPlaylists[] | null>(null);
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [maxPlaylists, setMaxPlaylists] = useState<number>(6);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://track-music-server.vercel.app/top-playlist', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();
                setPlaylist(data);
            } catch (error) {
                console.error('Erro ao buscar dados das top playlist:', error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        switch (true) {
            case width <= 1024 && width > 768:
                setMaxPlaylists(6);
                break;
            case width <= 768 && width > 500:
                setMaxPlaylists(4);
                break;
            case width < 500:
                setMaxPlaylists(3);
                break;
        }

        return () => window.removeEventListener('resize', handleResize);
    }, [width]);

    if (!playlist) {
        return (
            <Loading />
        );
    }
    const playlistsToShow = playlist.slice(0, maxPlaylists);

    return (
        <main className={style.main}>
            <h1 style={{ overflow: 'hidden', whiteSpace: "nowrap" }}>Playlists em alta</h1>
            <div className={style.container_top_playlists}>
                {playlistsToShow.map((playlist) => (
                    <Link key={playlist.id} to={`/playlist/${playlist.id}`} style={{ textDecoration: "none", width: "100%" }}>
                        <Playlist playlist={playlist} />
                    </Link>
                ))}
            </div>
        </main>
    );
}

export default TopPlaylists;

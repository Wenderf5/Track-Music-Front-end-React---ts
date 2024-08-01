import style from './index.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Playlist from './_components/Playlist';
import Loading from '../../../../components/loading';
import { interfaceTopPlaylists } from '../../../../types/topPlaylists';

function TopPlaylists() {
    const [playlist, setPlaylist] = useState<interfaceTopPlaylists[] | null>(null);
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

    if (!playlist) {
        return (
            <Loading />
        );
    }

    return (
        <div className={style.divTopPlaylists}>
            <h1 style={{ overflow: 'hidden', whiteSpace: "nowrap"}}>Playlists em alta</h1>
            <div className={style.containerTopPlaylists}>
                {playlist.map((playlist) => (
                    <Link key={playlist.id} to={`/playlist/${playlist.id}`} style={{ textDecoration: "none", width: "16%" }}>
                        <Playlist playlist={playlist} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default TopPlaylists;

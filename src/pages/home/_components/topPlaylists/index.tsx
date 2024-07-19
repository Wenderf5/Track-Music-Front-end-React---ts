import style from './index.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Playlist from './_components/Playlist';
import { interfaceTopPlaylists } from '../../../../types/topPlaylists';

function TopPlaylists() {
    const [playlist, setPlaylist] = useState<interfaceTopPlaylists[]>([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://track-music-server.vercel.app/top-playlist', {
                    method: 'GET'
                });
                const data = await response.json();
                setPlaylist(data);
            } catch (error) {
                console.error('Erro ao buscar dados das top playlist:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className={style.divTopPlaylists}>
            <h2>Playlistis em alta</h2>
            <div className={style.containerTopPlaylists}>
                {playlist.map((playlist, index) => (
                    <Link to={`/playlist/${playlist.id}`} style={{ textDecoration: "none" }}>
                        <Playlist key={index} playlist={playlist} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default TopPlaylists
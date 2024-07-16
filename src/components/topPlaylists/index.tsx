import style from './index.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Playlist from './_components/Playlist';

function TopPlaylists() {
    interface playlist {
        id: string
    }
    const [playlist, setPlaylist] = useState<playlist[]>([]);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.deezer.com/chart/0/playlists?limit=6', {
                method: 'GET'
            });
            const data = await response.json();
            setPlaylist(data.data);
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
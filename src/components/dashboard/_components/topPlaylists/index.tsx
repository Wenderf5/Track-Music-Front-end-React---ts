import style from './index.module.css';
import { useEffect, useState } from 'react';
import Playlist from './_components/Playlist';

function TopPlaylists() {
    const [playlist, setPlaylist] = useState([]);
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
                    <Playlist key={index} playlist={playlist} />
                ))}
            </div>
        </div>
    )
}

export default TopPlaylists
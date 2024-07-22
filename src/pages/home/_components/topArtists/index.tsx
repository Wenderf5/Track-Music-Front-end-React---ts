import style from './index.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Artist from './_components/Artist';
import { interfaceTopArtists } from '../../../../types/topArtists';

function TopArtists() {
    const [artists, setArtist] = useState<interfaceTopArtists[]>([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://track-music-server.vercel.app/top-artists', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();
                setArtist(data);
            } catch (error) {
                console.error('Erro ao buscar dados dos top artistas:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div className={style.divTopArtists}>
            <h2>Artistas em alta</h2>
            <div className={style.containerTopArtists}>
                {artists.map((artist, index) => (
                    <Link to={`/artist/${artist.id}`} style={{ textDecoration: "none" }}>
                        <Artist key={index} artist={artist} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default TopArtists
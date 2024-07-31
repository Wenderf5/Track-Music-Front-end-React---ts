import style from './index.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Artist from './_components/Artist';
import { interfaceTopArtists } from '../../../../types/topArtists';
import Loading from '../../../../components/loading';

function TopArtists() {
    const [artists, setArtist] = useState<interfaceTopArtists[] | null>(null);
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

    if (!artists) {
        return (
            <Loading />
        );
    }

    return (
        <div className={style.divTopArtists}>
            <h2 style={{ overflow: 'hidden', whiteSpace: "nowrap" }}>Artistas em alta</h2>
            <div className={style.containerTopArtists}>
                {artists.map((artist) => (
                    <Link key={artist.id} to={`/artist/${artist.id}`} style={{ textDecoration: "none", width: "16%", height: "100%" }}>
                        <Artist artist={artist} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default TopArtists;

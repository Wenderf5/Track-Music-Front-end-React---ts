import style from './index.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Artist from './_components/Artist';
import { interfaceTopArtists } from '../../../../types/topArtists';
import Loading from '../../../../components/loading';

function TopArtists() {
    const [artists, setArtist] = useState<interfaceTopArtists[] | null>(null);
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [maxArtists, setMaxArtists] = useState<number>(6);

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

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        switch (true) {
            case width <= 1024 && width > 768:
                setMaxArtists(6);
                break;
            case width <= 768 && width > 500:
                setMaxArtists(4);
                break;

            case width < 500:
                setMaxArtists(3);
                break;
        }

        return () => window.removeEventListener('resize', handleResize);
    }, [width]);

    if (!artists) {
        return (
            <Loading />
        );
    }
    const artistsToShow = artists.slice(0, maxArtists);

    return (
        <main className={style.main}>
            <h1 style={{ overflow: 'hidden', whiteSpace: "nowrap" }}>Artistas em alta</h1>
            <div className={style.container_top_artists}>
                {artistsToShow.map((artist) => (
                    <Link key={artist.id} to={`/artist/${artist.id}`} style={{ textDecoration: "none", width: "100%" }}>
                        <Artist artist={artist} />
                    </Link>
                ))}
            </div>
        </main>
    );
}

export default TopArtists;

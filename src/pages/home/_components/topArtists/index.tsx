import style from './index.module.css';
import { useState, useEffect } from 'react';
import { Artists } from './_components/Artists';
import { interfaceTopArtist } from '../../../../types/topArtist';
import { Loading } from '../../../../components/Loading';
import { Link } from 'react-router-dom';

export function TopArtists() {
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [artistsToShow, setArtistsToShow] = useState<interfaceTopArtist[] | undefined>(undefined);
    const [TopArtists, setTopArtists] = useState<interfaceTopArtist[] | undefined>(undefined);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://track-music-server.vercel.app/top-artists`, {
                    method: 'GET'
                });
                const data = await response.json();
                setTopArtists(data);
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
                setArtistsToShow(TopArtists?.slice(1));
                break;
            case width <= 768 && width > 500:
                setArtistsToShow(TopArtists?.slice(2));
                break;
            case width <= 500 && width > 425:
                setArtistsToShow(TopArtists?.slice(3));
                break;
            case width < 425:
                setArtistsToShow(TopArtists?.slice(3));
                break;
            default:
                setArtistsToShow(TopArtists);
                break;
        }
        return () => window.removeEventListener('resize', handleResize);
    }, [width, TopArtists])

    if (!TopArtists) {
        return (
            <Loading />
        )
    }

    return (
        <main className={style.main}>
            <h2 className={style.top_artists_txt}>Artistas em alta</h2>
            <div className={style.container_top}>
                {artistsToShow?.map((item, index) => (
                    <Link to={`/artist/${item.id}`} key={item.id} className={style.link}>
                        <Artists key={index} artist={item} />
                    </Link>
                ))}
            </div>
        </main>
    )
}
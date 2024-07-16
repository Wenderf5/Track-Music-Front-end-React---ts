import style from './index.module.css';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import capa2 from '../../assets/img/Capas/500x500-000000-80-0-0 (1).jpg';
import InfoMusic from '../../components/infoMusic';
import Playlists from '../../components/playlists';
import Footer from '../../components/footer';
import BtnHome from '../../components/btnHome';
import Music from '../../components/Music';

function Playlist() {
    interface Data {
        title?: string;
        creator?: {
            name: string;
        };
        picture_big?: string;
    }

    const { playlistID } = useParams();
    const [playlist, setPlaylist] = useState<Data | undefined>(undefined);
    const [musics, setMusics] = useState<[]>([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://api.deezer.com/playlist/${playlistID}`, {
                method: 'GET'
            });
            const data = await response.json();
            setMusics(data.tracks.data);
            setPlaylist(data);
        }
        fetchData();
    }, [])

    return (
        <main className={style.page}>
            <div className={style.divPricipal}>
                <Playlists />
                <div className={style.dashborad}>
                    <div className={style.divPlaylist}>
                        <div className={style.divInfoPlaylist}>
                            <div className={style.playlistIMG}>
                                <img style={{ width: "100%", height: "100%", borderRadius: "10px" }} src={playlist?.picture_big} alt="Capa da playlist" />
                            </div>
                            <div className={style.divInfo}>
                                <span className={style.playlistName}>{playlist?.title}</span>
                                <span className={style.creatorName}>Criado por: {playlist?.creator?.name}</span>
                            </div>
                            <div className={style.divBtnHome}>
                                <Link to={'/'}>
                                    <BtnHome />
                                </Link>
                            </div>
                        </div>
                        <div className={style.divMusic}>
                            <span className={style.music}>Músicas:</span>
                            {musics.map((track, index) => (
                                <Music key={index} track={track} />
                            ))}
                        </div>
                    </div>
                </div>
                <InfoMusic img={capa2} />
            </div>
            <Footer />
        </main>
    )
}

export default Playlist
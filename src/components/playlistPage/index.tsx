import style from './index.module.css';
import BtnHome from './components/btnHome';
import capa from '../../assets/img/Capas/500x500-000000-80-0-0 (3).jpg';
import Music from '../Music';
import { useEffect, useState } from 'react';

interface props {
    setPlaylistIsVisible: any
    playlistIsVisible: boolean
}

function PlaylistPage({ setPlaylistIsVisible, playlistIsVisible }: props) {
    interface Data {
        title?: string;
        creator?: {
            name: string;
        };
        picture_big?: string;
    }

    const [playlist, setPlaylist] = useState<Data | undefined>(undefined);
    const [musics, setMusics] = useState<[]>([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.deezer.com/playlist/908622995', {
                method: 'GET'
            });
            const data = await response.json();
            setMusics(data.tracks.data);
            setPlaylist(data);
        }
        fetchData();
    }, [])

    return (
        <main className={style.main}>
            <div className={style.divInfoPlaylist}>
                <div className={style.playlistIMG}>
                    <img style={{ width: "100%", height: "100%", borderRadius: "10px" }} src={playlist?.picture_big} alt="Capa da playlist" />
                </div>
                <div className={style.divInfo}>
                    <span className={style.playlistName}>{playlist?.title}</span>
                    <span className={style.creatorName}>Criado por: {playlist?.creator?.name}</span>
                </div>
                <div className={style.divBtnHome}>
                    <div onClick={() => setPlaylistIsVisible(!playlistIsVisible)}>
                        <BtnHome />
                    </div>
                </div>
            </div>
            <div className={style.divMusic}>
                <span className={style.music}>Músicas:</span>
                {musics.map((track, index) => (
                    <Music key={index} track={track} />
                ))}
            </div>
        </main>
    )
}

export default PlaylistPage;

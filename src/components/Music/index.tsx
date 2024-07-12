import style from './index.module.css';
import Buttom from '../button';
import iconePlay from '../../assets/icons/play-regular-240.png';
import iconePause from '../../assets/icons/pause-regular-240.png';
import iconePlus from '../../assets/icons/plus-regular-240.png';
import iconeDeezerActive from '../../assets/icons/deezer-logo-active-240.png';
import iconeDeezer from '../../assets/icons/deezer-logo-240.png';
import { useRef, useState, useContext, useEffect, useCallback } from 'react';
import { CurrentMusicContext } from '../../context/currentMusic';
import { VolumeContext } from '../../context/volumeContext';

interface props {
    track: any
    key: number
}

function Music({ track }: props) {
    const currentMusicContext = useContext(CurrentMusicContext);
    if (!currentMusicContext) {
        throw new Error("Erro no context")
    }
    const { setCurrentMusic } = currentMusicContext;
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const audio = audioRef.current;
    
    console.log(audio?.duration)

    const togglePlay = useCallback(() => {
        const audio = audioRef.current;
        if (audio) {
            if (isPlaying) {
                audio.pause();
                setIsPlaying(false);
            } else {
                audio.play();
                setIsPlaying(true);
            }
            setCurrentMusic(track);
        }
    }, [isPlaying, track, setCurrentMusic]);

    const volumeContext = useContext(VolumeContext);
    if (!volumeContext) {
        throw new Error("Erro no context");
    }
    const { volumeCon, volumeMutedCon } = volumeContext;

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.volume = volumeCon / 100;
        }
    }, [volumeCon]);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.muted = volumeMutedCon;
        }
    }, [volumeMutedCon]);

    return (
        <main className={style.main} onClick={togglePlay}>
            <div className={style.imgMusic}>
                <img
                    width="100%"
                    height="100%"
                    style={{ borderRadius: '3px' }}
                    src={track.album.cover_small}
                    alt="Musica"
                />
            </div>
            <div className={style.divInfo}>
                <span>{track.title}</span>
                <span className={style.groupName}>{track.artist.name}</span>
            </div>
            <div className={style.divMultMedia}>
                <Buttom
                    type='music'
                    icone={<img src={iconePlus} width="25px" style={{ cursor: 'pointer' }} alt="Adicionar a playlist" />}
                />
                <Buttom
                    type='music'
                    icone={<img src={isPlaying ? iconePause : iconePlay} width="25px" style={{ cursor: 'pointer' }} alt={isPlaying ? "Pause" : "Play"} />}
                />
                <Buttom
                    type='music'
                    icone={<img src={isPlaying ? iconeDeezerActive : iconeDeezer} width="23px" style={{ cursor: 'pointer' }} alt="Tocando" />}
                />
            </div>
            <audio ref={audioRef} src={track.preview}></audio>
        </main>
    )
}

export default Music;

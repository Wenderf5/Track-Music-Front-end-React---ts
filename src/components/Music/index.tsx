import style from './index.module.css';
import Button from '../button';
import SuspenseMenu from './_components/suspenseMenu';
import iconePlay from '../../assets/icons/play-regular-240.png';
import iconePause from '../../assets/icons/pause-regular-240.png';
import iconePlus from '../../assets/icons/plus-regular-240.png';
import iconeDeezerActive from '../../assets/icons/deezer-logo-active-240.png';
import iconeDeezer from '../../assets/icons/deezer-logo-240.png';
import { useRef, useState, useContext, useEffect } from 'react';
import { CurrentMusicContext } from '../../context/currentMusic';
import { VolumeContext } from '../../context/volumeContext';
import { interfaceTrack } from '../../types/track';

interface Props {
    track: interfaceTrack;
}

function Music({ track }: Props) {
    const currentMusicContext = useContext(CurrentMusicContext);
    if (!currentMusicContext) {
        throw new Error('Erro no contexto "currentMusicContext" Music linha 19.');
    }
    const {
        setCurrentMusic,
        setCurrentMusicDuration,
        setCurrentMusicTime,
        setCurrentMusicTooglePlay,
        setCurrentMusicIsPlaying,
        setAudioRef,
        currentMusic,
    } = currentMusicContext;

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [showSuspenseMenu, setShowSuspenseMenu] = useState<boolean>(false);

    const playPause = async () => {
        const audio = audioRef.current;
        if (!audio) {
            return;
        }
        setAudioRef(audioRef);
        if (isPlaying) {
            audio.pause();
            setIsPlaying(false);
        } else {
            const allAudioPlayers = document.querySelectorAll('audio');
            allAudioPlayers.forEach(player => {
                if (player !== audio) {
                    player.pause();
                    player.currentTime = 0;
                }
            });
            if (audio.src != track.preview) {
                audio.src = track.preview;
            }
            await audio.play().then(() => {
                setIsPlaying(true);
            }).catch((error) => {
                console.log("Erro ao tocar a música:", error);
            });
        }
        setCurrentMusic(track);
        setCurrentMusicDuration(Math.round(audio.duration));
    };

    const handlePause = () => {
        setIsPlaying(false);
    };

    useEffect(() => {
        setCurrentMusicTooglePlay(() => playPause);
        setCurrentMusicIsPlaying(isPlaying);
    }, [isPlaying]);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            const handleTimeUpdate = () => {
                setCurrentMusicTime(Math.round(audio.currentTime));
            };

            audio.addEventListener('timeupdate', handleTimeUpdate);
            audio.addEventListener('ended', () => {
                audio.currentTime = 0;
            });
            return () => {
                audio.removeEventListener('timeupdate', handleTimeUpdate);
            };
        }
    }, [setCurrentMusicTime]);

    const volumeContext = useContext(VolumeContext);
    if (!volumeContext) {
        throw new Error('Erro no contexto "volumeContext" Music linha 92.');
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

    function reloadMusic() {
        const audio = audioRef.current;
        if (audio) {
            audio.currentTime = 0;
            audio.play().then(() => setIsPlaying(true));
        }
        setCurrentMusic(track);
        setIsPlaying(false);
    }

    useEffect(() => {
        setIsPlaying(false);
    }, [track]);

    return (
        <main className={style.main}>
            <div className={style.imgMusic} onClick={isPlaying ? reloadMusic : playPause}>
                <img
                    width="85%"
                    height="85%"
                    style={{ borderRadius: '3px' }}
                    src={track.album.cover_big}
                    alt="Music img"
                />
            </div>
            <div className={style.divInfo} onClick={isPlaying ? reloadMusic : playPause}>
                <span className={isPlaying ? style.trackTitleActive : style.trackTitle}>{track.title}</span>
                <span className={style.groupName}>{track.artist.name}</span>
            </div>
            <div className={style.divMultMedia} onClick={() => setShowSuspenseMenu(!showSuspenseMenu)} onMouseOut={() => setShowSuspenseMenu(false)}>
                <Button
                    type='music'
                    icone={<img src={iconePlus} width="25px" style={{ cursor: 'pointer' }} alt="Adicionar a playlist" />}
                />
                {showSuspenseMenu && (
                    <div onMouseOut={() => setShowSuspenseMenu(false)} onMouseOver={() => setShowSuspenseMenu(true)}>
                        <SuspenseMenu track={track} />
                    </div>
                )}
            </div>
            <div className={style.divMultMedia} onClick={playPause}>
                <Button
                    type='music'
                    icone={<img src={currentMusic === track && isPlaying ? iconePause : iconePlay} width="25px" style={{ cursor: 'pointer' }} alt={currentMusic === track && isPlaying ? "Pause" : "Play"} />}
                />
            </div>
            <div className={style.divMultMedia} onClick={isPlaying ? reloadMusic : playPause}>
                <Button
                    type='music'
                    icone={<img src={currentMusic === track && isPlaying ? iconeDeezerActive : iconeDeezer} width="23px" style={{ cursor: 'pointer' }} alt="Tocando" />}
                />
            </div >
            <audio ref={audioRef} onPause={handlePause}></audio>
        </main >
    );
}

export default Music;

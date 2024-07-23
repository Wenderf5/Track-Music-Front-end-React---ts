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
import { PlaylistContext } from '../../context/playlist';
import { interfaceTrack } from '../../types/track';

interface Props {
    track?: interfaceTrack;
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

    const playPause = useCallback(() => {
        const audio = audioRef.current;
        setAudioRef(audioRef);
        if (!audio) {
            return;
        }

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

            audio.play().then(() => {
                setIsPlaying(true);
            }).catch((error) => {
                console.error("Erro ao tocar a música:", error);
            });
        }

        setCurrentMusic(track);
        setCurrentMusicDuration(Math.round(audio.duration));
    }, [isPlaying, track, setCurrentMusic, setCurrentMusicDuration, setAudioRef]);

    const handlePause = () => {
        setIsPlaying(false);
    };

    useEffect(() => {
        setCurrentMusicTooglePlay(() => playPause);
        setCurrentMusicIsPlaying(isPlaying);
    }, [playPause, isPlaying, setCurrentMusicTooglePlay, setCurrentMusicIsPlaying]);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            const handleTimeUpdate = () => {
                setCurrentMusicTime(Math.round(audio.currentTime));
            };

            audio.addEventListener('timeupdate', handleTimeUpdate);
            audio.addEventListener('ended', () => {
                audio.currentTime = 0
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
            audio.load();
            audio.play().then(() => setIsPlaying(true));
        }
        setCurrentMusic(track);
        setIsPlaying(false);
    }

    const playlistContext = useContext(PlaylistContext);
    if (!playlistContext) {
        throw new Error('Erro no contexto "volumeContext" Music linha 92.');
    }
    const { playlists } = playlistContext;

    function addMusicPlaylist() {
        for (let i = 0; i < playlists.length; i++) {
            if (playlists[i].id === 123) {
                const musics = playlists[i].musics;
                musics.push(track);
            }
            console.log(playlists[i]);
        }
    }

    return (
        <main className={style.main} onClick={isPlaying ? reloadMusic : playPause}>
            <div className={style.imgMusic}>
                <img
                    width="100%"
                    height="100%"
                    style={{ borderRadius: '3px' }}
                    src={track?.album.cover_big}
                    alt="Musica"
                />
            </div>
            <div className={style.divInfo}>
                <span>{track?.title || "Alguma coisa"}</span>
                <span className={style.groupName}>{track?.artist.name}</span>
            </div>
            <div className={style.divMultMedia}>
                <div onClick={addMusicPlaylist}>
                    <Buttom
                        type='music'
                        icone={<img src={iconePlus} width="25px" style={{ cursor: 'pointer' }} alt="Adicionar a playlist" />}
                    />
                </div>
                <Buttom
                    type='music'
                    icone={<img src={currentMusic === track && isPlaying ? iconePause : iconePlay} width="25px" style={{ cursor: 'pointer' }} alt={currentMusic === track && isPlaying ? "Pause" : "Play"} />}
                />
                <Buttom
                    type='music'
                    icone={<img src={currentMusic === track && isPlaying ? iconeDeezerActive : iconeDeezer} width="23px" style={{ cursor: 'pointer' }} alt="Tocando" />}
                />
            </div>
            <audio ref={audioRef} src={track?.preview} onPause={handlePause}></audio>
        </main>
    );
}

export default Music;

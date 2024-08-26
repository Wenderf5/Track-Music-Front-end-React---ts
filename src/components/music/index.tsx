import style from './index.module.css';
import { Button } from './_components/button';
import { interfaceMusics } from '../../types/musics';
import { useContext, useEffect, useState } from 'react';
import { CurrentMusicContext } from '../../context/currentMusic';
import iconPlay from '../../assets/icons/play-regular-240.png';
import iconPause from '../../assets/icons/pause-regular-240.png';
import iconDeezer from '../../assets/icons/deezer-logo-240.png';
import iconDeezerActive from '../../assets/icons/deezer-logo-active-240.png';

interface props {
    music: interfaceMusics;
}

export function Music({ music }: props) {
    const currentMusicContext = useContext(CurrentMusicContext);
    if (!currentMusicContext) {
        return "Erro no contexto 'src/components/Music' linha 18.";
    }
    const {
        audioRef,
        setCurrentMusic,
        setPlayPause,
        setIsPlayingContext,
        volume,
        setDuration,
        setCurrentMusicTime
    } = currentMusicContext;
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    function PlayPause() {
        if (!audioRef.current) {
            return;
        }
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            if (audioRef.current.src !== music.preview) {
                audioRef.current.src = music.preview;
            }
            audioRef.current.play()
                .then(() => {
                    if (!audioRef.current) {
                        return;
                    }
                    setDuration(Math.round(audioRef.current.duration));
                    setIsPlaying(true);
                })
                .catch((error: Error) => {
                    console.log("Erro ao tocar a música:", error);
                });

            audioRef.current.addEventListener('ended', () => {
                audioRef.current?.play();
            });

            audioRef.current.addEventListener('timeupdate', function () {
                if (!audioRef.current) {
                    return;
                }
                setCurrentMusicTime(Math.round(audioRef.current.currentTime));
            });

            audioRef.current.removeEventListener('ended', () => {
                audioRef.current?.play();
            });

            audioRef.current.removeEventListener('timeupdate', function () {
                if (!audioRef.current) {
                    return;
                }
                setCurrentMusicTime(Math.round(audioRef.current.currentTime));
            });
        }
        setCurrentMusic(music);
    }

    useEffect(() => {
        if (!audioRef.current) {
            return;
        }
        audioRef.current.volume = volume / 100;
    }, [volume]);

    useEffect(() => {
        setIsPlaying(false);
    }, [audioRef.current?.src]);

    useEffect(() => {
        setIsPlayingContext(isPlaying);
        setPlayPause(() => PlayPause);
    }, [isPlaying]);

    return (
        <main className={style.main} onClick={PlayPause}>
            <div className={style.container_info}>
                <img className={style.img} src={music?.album.cover_big} alt="" />
                <div className={style.container_info_txt}>
                    <span className={isPlaying ? style.music_name_active : style.music_name}>{music?.title}</span>
                    <span className={style.artist_name}>{music?.artist.name}</span>
                </div>
            </div>
            <div className={style.container_btn}>
                <Button icon={isPlaying ? iconPause : iconPlay} />
                <Button icon={isPlaying ? iconDeezerActive : iconDeezer} />
            </div>
        </main>
    );
}

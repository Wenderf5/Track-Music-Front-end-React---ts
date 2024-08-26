import style from './index.module.css';
import { useState, useContext, useEffect } from 'react';
import { CurrentMusicContext } from '../../../../context/currentMusic';
import Slider from '@mui/material/Slider';
import { Button } from './_components/button';

import iconPause from '../../../../assets/icons/pause.png';
import iconPlay from '../../../../assets/icons/play.png';
import iconNext from '../../../../assets/icons/skip-next-regular-240.png';
import iconBack from '../../../../assets/icons/skip-previous-regular-240.png';

export function Multimidia() {
    const currentMusicContext = useContext(CurrentMusicContext);
    if (!currentMusicContext) {
        return "Erro no contexto 'src/components/Music' linha 18.";
    }
    const {
        PlayPause,
        isPlaying,
        duration,
        currentMusicTime,
        setCurrentMusicTime,
        audioRef
    } = currentMusicContext;


    const [position, setPosition] = useState(0);
    useEffect(() => {
        if (!audioRef.current) {
            return;
        }
        audioRef.current.currentTime = position;
    }, [position])

    const handleChange = (event: Event, newValue: number | number[]) => {
        console.log(event);
        setPosition(newValue as number);
        setCurrentMusicTime(newValue as number);
    };

    return (
        <main className={style.main}>
            <div className={style.container_multimidia}>
                <Button icon={iconBack} />
                <Button icon={isPlaying ? iconPause : iconPlay} action={PlayPause} />
                <Button icon={iconNext} />
            </div>
            <div className={style.container_time}>
                <span className={style.txt_time}>{!currentMusicTime ? "0:00" : `${Math.floor(currentMusicTime / 60)}:${currentMusicTime % 60 < 10 ? `0${currentMusicTime % 60}` : currentMusicTime % 60}`}</span>
                <Slider
                    aria-label="Time"
                    value={currentMusicTime}
                    min={0}
                    max={duration}
                    onChange={handleChange}
                    sx={{
                        flexGrow: "1",
                        color: 'white',
                        height: "3px",
                        '& .MuiSlider-thumb': {
                            display: "none"
                        }
                    }}
                />
                <span className={style.txt_time}>{!duration ? "0:00" : `${Math.floor(duration / 60)}:${duration % 60 < 10 ? `0${duration % 60}` : duration % 60}`}</span>
            </div>
        </main>
    )
}
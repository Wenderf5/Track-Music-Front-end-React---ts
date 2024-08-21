import style from './index.module.css';
import { useContext, useEffect } from 'react';
import { CurrentMusicContext } from '../../../../context/currentMusic';
import Slider from '@mui/material/Slider';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from './_components/Button';

export function Sound() {
    const currentMusicContext = useContext(CurrentMusicContext);
    if (!currentMusicContext) {
        return "Erro no contexto 'src/components/Music' linha 18.";
    }
    const {
        volume,
        setVolume,
        isMuted,
        setIsMuted
    } = currentMusicContext;

    useEffect(() => {
        switch (volume < 1) {
            case true:
                setIsMuted(true);
                break;
            case false:
                setIsMuted(false);
                break;
        }
    }, [volume]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        console.log(event);
        setVolume(newValue as number);
    };

    return (
        <main className={style.main}>
            <Button
                action={() => { setIsMuted(!isMuted), isMuted ? setVolume(30) : setVolume(0) }}
                icon={
                    isMuted ?
                        <VolumeX
                            color='white'
                            size={20}
                            cursor={"pointer"}
                        />
                        :
                        <Volume2
                            color='white'
                            size={20}
                            cursor={"pointer"}
                        />
                }
            />
            <Slider
                aria-label="Volume"
                value={volume}
                onChange={handleChange}
                sx={{
                    color: 'white',
                    width: "25%",
                    height: "3px",
                    '& .MuiSlider-thumb': {
                        display: "none"
                    }
                }}
            />
        </main>
    )
}
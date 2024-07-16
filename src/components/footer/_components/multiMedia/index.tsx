import style from './index.module.css';
import Buttom from '../../../button';
import next from '../../../../assets/icons/skip-next-regular-240.png';
import pause from '../../../../assets/icons/pause.png';
import Play from '../../../../assets/icons/play.png';
import back from '../../../../assets/icons/skip-previous-regular-240.png';
import { useContext } from 'react';
import { CurrentMusicContext } from '../../../../context/currentMusic';
import Slider from '@mui/material/Slider';

function MultiMedia() {
    const currentMusicContext = useContext(CurrentMusicContext);
    if (!currentMusicContext) {
        throw new Error('Erro no contexto "currentMusicContext" MultiMedia linha 14.');
    }
    const {
        currentMusicDuration,
        currentMusicTime,
        setCurrentMusicTime,
        currentMusicIsPlaying,
        currentMusicTooglePlay,
        audioRef,
    } = currentMusicContext;

    const handleChange = (event: Event, newValue: number | number[]) => {
        const newTime = newValue as number;
        setCurrentMusicTime(newTime);
        const audio = audioRef?.current;
        if (audio) {
            audio.currentTime = newTime;
        }
    };

    return (
        <main className={style.main}>
            <div className={style.containerOP}>
                <Buttom type='multimedia' icone={<img src={back} width={"33px"} alt="Back" />} />
                <div onClick={currentMusicTooglePlay}>
                    <Buttom type='multimedia' icone={<img src={currentMusicIsPlaying ? pause : Play} width={"33px"} alt="Play/Pause" />} />
                </div>
                <Buttom type='multimedia' icone={<img src={next} width={"33px"} alt="Next" />} />
            </div>
            <div className={style.containerTime}>
                <span className={style.currentTime}>{!currentMusicTime ? "0:00" : `${Math.floor(currentMusicTime / 60)}:${currentMusicTime % 60 < 10 ? `0${currentMusicTime % 60}` : currentMusicTime % 60}`}</span>
                <Slider
                    aria-label="Time"
                    value={currentMusicTime || 0}
                    min={0}
                    max={currentMusicDuration || 100}
                    onChange={handleChange}
                    sx={{
                        color: 'white',
                        height: "2.5px",
                        width: "85%",
                        '& .MuiSlider-thumb': {
                            display: "none"
                        }
                    }}
                />
                <span className={style.duration}>{!currentMusicDuration ? "0:00" : `${Math.floor(currentMusicDuration / 60)}:${currentMusicDuration % 60 < 10 ? `0${currentMusicDuration % 60}` : currentMusicDuration % 60}`}</span>
            </div>
        </main>
    );
}

export default MultiMedia;

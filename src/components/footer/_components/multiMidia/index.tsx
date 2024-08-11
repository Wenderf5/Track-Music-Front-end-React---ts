import style from './index.module.css';
import Buttom from '../../../button';
import next from '../../../../assets/icons/skip-next-regular-240.png';
import pause from '../../../../assets/icons/pause.png';
import Play from '../../../../assets/icons/play.png';
import back from '../../../../assets/icons/skip-previous-regular-240.png';
import { useContext } from 'react';
import { CurrentMusicContext } from '../../../../context/currentMusic';
import Slider from '@mui/material/Slider';

function MultiMidia() {
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
        console.log(event);
        const newTime = newValue as number;
        setCurrentMusicTime(newTime);
        const audio = audioRef?.current;
        if (audio) {
            audio.currentTime = newTime;
        }
    };

    return (
        <main className={style.main}>
            <div className={style.container_op}>
                <div className={style.next_back}>
                    <Buttom type='multimedia' icone={<img src={back} width={"33px"} alt="Back" />} />
                </div>
                <div onClick={currentMusicTooglePlay}>
                    <Buttom type='multimedia' icone={<img src={currentMusicIsPlaying ? pause : Play} width={"33px"} alt="Play/Pause" />} />
                </div>
                <div className={style.next_back}>
                    <Buttom type='multimedia' icone={<img src={next} width={"33px"} alt="Next" />} />
                </div>
            </div>
            <div className={style.container_time}>
                <span className={style.current_time}>{!currentMusicTime ? "0:00" : `${Math.floor(currentMusicTime / 60)}:${currentMusicTime % 60 < 10 ? `0${currentMusicTime % 60}` : currentMusicTime % 60}`}</span>
                <Slider
                    aria-label="Time"
                    value={currentMusicTime || 0}
                    min={0}
                    max={currentMusicDuration}
                    onChange={handleChange}
                    sx={{
                        color: 'white',
                        height: "2.5px",
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

export default MultiMidia;

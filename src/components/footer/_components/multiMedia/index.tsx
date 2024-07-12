import style from './index.module.css';
import Buttom from '../../../button';
import next from '../../../../assets/icons/skip-next-regular-240.png';
import pause from '../../../../assets/icons/pause.png';
import Play from '../../../../assets/icons/play.png';
import back from '../../../../assets/icons/skip-previous-regular-240.png';
import { useContext, useState } from 'react';
import { CurrentMusicContext } from '../../../../context/currentMusic';
import Slider from '@mui/material/Slider';

function MultiMedia() {
    const currentMusicContext = useContext(CurrentMusicContext);
    if (!currentMusicContext) {
        throw new Error("Erro no context");
    }
    const { currentMusic } = currentMusicContext;
    const [value, setValue] = useState<number>(35);
    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number);
    };

    return (
        <main className={style.main}>
            <div className={style.containerOP}>
                <Buttom type='multimedia' icone={<img src={back} width={"33px"} alt="Back" />} />
                <Buttom type='multimedia' icone={<img src={pause} width={"33px"} alt="Play/Pause" />} />
                <Buttom type='multimedia' icone={<img src={next} width={"33px"} alt="Next" />} />
            </div>
            <div className={style.containerTime}>
                <span>0:24</span>
                <Slider aria-label="Volume" value={value} onChange={handleChange} sx={{
                    color: 'white',
                    height: "2.5px",
                    width: "80%",
                    '& .MuiSlider-thumb': {
                        display: "none"
                    }
                }} />
                <span>0:30</span>
            </div>
        </main>
    )
}

export default MultiMedia
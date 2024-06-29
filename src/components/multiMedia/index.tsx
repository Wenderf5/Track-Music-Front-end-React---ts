import style from './index.module.css';
import Next from '../../assets/icons/skip-next-regular-240.png';
import Pause from '../../assets/icons/pause-circle-regular-240.png';
import Play from '../../assets/icons/play-circle-regular-240.png';
import Back from '../../assets/icons/skip-previous-regular-240.png';
import { useState } from 'react';
import Slider from '@mui/material/Slider';

function MultiMedia() {
    const [value, setValue] = useState<number>(40);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number);
    };

    return (
        <main className={style.main}>
            <div className={style.containerOP}>
                <img src={Back} width={"33px"} alt="Back" />
                <img src={Pause} width={"33px"} alt="Play/Pause" />
                <img src={Next} width={"33px"} alt="Next" />
            </div>
            <div className={style.containerTime}>
                <Slider aria-label="Volume" value={value} onChange={handleChange} sx={{
                    color: 'white',
                    height: "3px",
                    '& .MuiSlider-thumb': {
                        display: "none"
                    }
                }} />
            </div>
        </main>
    )
}

export default MultiMedia
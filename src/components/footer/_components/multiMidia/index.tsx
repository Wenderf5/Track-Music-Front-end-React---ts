import style from './index.module.css';
import { useState } from 'react';
import Slider from '@mui/material/Slider';
import { Button } from './_components/Button';

import iconPause from '../../../../assets/icons/pause.png';
import iconPlay from '../../../../assets/icons/play.png';
import iconNext from '../../../../assets/icons/skip-next-regular-240.png';
import iconBack from '../../../../assets/icons/skip-previous-regular-240.png';

export function Multimidia() {
    const [position, setPosition] = useState(30);
    const handleChange = (event: Event, newValue: number | number[]) => {
        setPosition(newValue as number);
    };

    return (
        <main className={style.main}>
            <div className={style.container_multimidia}>
                <Button icon={iconBack}/>
                <Button icon={iconPlay}/>
                <Button icon={iconNext}/>
            </div>
            <div className={style.container_time}>
                <span className={style.txt_time}>{"0:00"}</span>
                <Slider
                    aria-label="Time"
                    value={position}
                    min={0}
                    max={100}
                    onChange={handleChange}
                    sx={{
                        flexGrow: "1",
                        color: 'white',
                        height: "2.5px",
                        '& .MuiSlider-thumb': {
                            display: "none"
                        }
                    }}
                />
                <span className={style.txt_time}>{"0:31"}</span>
            </div>
        </main>
    )
}
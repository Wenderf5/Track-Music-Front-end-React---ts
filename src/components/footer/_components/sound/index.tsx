import style from './index.module.css';
import { useState } from 'react';
import Slider from '@mui/material/Slider';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from './_components/Button';

export function Sound() {
    const [volume, setVolume] = useState<number>(30);
    const handleChange = (event: Event, newValue: number | number[]) => {
        setVolume(newValue as number);
    };

    return (
        <main className={style.main}>
            <Button icon={<Volume2 color='white' size={20} cursor={"pointer"} />} />
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
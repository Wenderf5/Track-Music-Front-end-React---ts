import style from './index.module.css';
import { useState } from 'react';
import Buttom from '../../../button';
import { Volume2 } from 'lucide-react';
import Slider from '@mui/material/Slider';

function Sound() {
    const [value, setValue] = useState<number>(30);
    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number);
    };

    return (
        <main className={style.main}>
            <div className={style.inputRange}>
                <Buttom type='volume' icone={<Volume2 color='white'  size={20}/>}/>
                <Slider aria-label="Volume" value={value} onChange={handleChange} sx={{
                    color: 'white',
                    height: "2.5px",
                    '& .MuiSlider-thumb': {
                        display: "none"
                    }
                }} />
            </div>
        </main>
    )
}

export default Sound
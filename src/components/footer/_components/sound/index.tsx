import style from './index.module.css';
import { useState, useContext, useEffect } from 'react';
import { VolumeContext } from '../../../../context/volumeContext';
import Buttom from '../../../button';
import Slider from '@mui/material/Slider';
import { Volume2, VolumeX } from 'lucide-react';

function Sound() {
    const volumeContext = useContext(VolumeContext);
    if (!volumeContext) {
        throw new Error('Erro no contexto "volumeContext" Sound linha 11.')
    }
    const { volumeCon, setVolumeCon, volumeMutedCon, setVolumeMutedCon } = volumeContext;
    const [volume, setVolume] = useState<number>(volumeCon);

    useEffect(() => {
        if (volumeMutedCon) {
            setVolume(0);
        } else {
            setVolume(30);
            setVolumeCon(30);
        }
    }, [volumeMutedCon]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        console.log(event);
        setVolume(newValue as number);
        setVolumeCon(newValue as number);
        if (newValue as number < 1) {
            setVolumeMutedCon(true)
        }else(
            setVolumeMutedCon(false)
        )
    };

    return (
        <main className={style.main}>
            <div className={style.input_range}>
                <div onClick={() => setVolumeMutedCon(!volumeMutedCon)}>
                    {volumeMutedCon || volume < 1 ? (
                        <Buttom type='volume' icone={<VolumeX color='white' size={20} />} />
                    ) : (
                        <Buttom type='volume' icone={<Volume2 color='white' size={20} />} />
                    )}
                </div>
                <Slider
                    aria-label="Volume"
                    value={volume}
                    onChange={handleChange}
                    sx={{
                        color: 'white',
                        height: "2.5px",
                        '& .MuiSlider-thumb': {
                            display: "none"
                        }
                    }}
                />
            </div>
        </main>
    );
}

export default Sound;

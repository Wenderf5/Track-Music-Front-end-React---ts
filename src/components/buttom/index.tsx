import style from './index.module.css';
import iconePlaylist from '../../assets/icons/playlist-solid-240.png';
import { ListVideo } from 'lucide-react';
import { useState } from 'react';

interface props {
    type: string
}

function Buttom(props: props) {

    return (
        <button
            className={props.type === 'playlist' ? style.playlist : ""}
        >
            {
                props.type === 'playlist' && <ListVideo color='#989898' size={30} />
            }
        </button>
    )
}

export default Buttom
import style from './index.module.css';
import iconePlaylist from '../../assets/icons/playlist-solid-240.png';

interface props {
    type: string
}

function Buttom(props: props) {

    return (
        <button
            className={props.type === 'playlist' ? style.playlist : ""}
        >
            {
                props.type === 'playlist' && <img src={iconePlaylist} width={"100%"} height={"100%"} alt="playlist" />
            }
        </button>
    )
}

export default Buttom
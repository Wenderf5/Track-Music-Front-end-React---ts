import MultiMedia from './_components/multiMedia';
import MusicMenu from './_components/musicMenu';
import Sound from './_components/sound';
import style from './index.module.css';

function Footer() {
    return (
        <div className={style.divMusicBar}>
            <MusicMenu />
            <MultiMedia />
            <Sound/>
        </div>
    )
}

export default Footer
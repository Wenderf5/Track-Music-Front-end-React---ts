import MultiMidia from './_components/multiMidia';
import MusicMenu from './_components/musicMenu';
import Sound from './_components/sound';
import style from './index.module.css';

function Footer() {
    return (
        <div className={style.divMusicBar}>
            <MusicMenu />
            <MultiMidia />
            <Sound/>
        </div>
    )
}

export default Footer
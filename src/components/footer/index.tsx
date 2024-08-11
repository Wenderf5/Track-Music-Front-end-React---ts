import MultiMidia from './_components/multiMidia';
import MusicMenu from './_components/musicMenu';
import Sound from './_components/sound';
import style from './index.module.css';

function Footer() {
    return (
        <main className={style.main}>
            <MusicMenu />
            <MultiMidia />
            <Sound/>
        </main>
    )
}

export default Footer
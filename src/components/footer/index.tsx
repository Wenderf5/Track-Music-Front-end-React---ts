import style from './index.module.css';
import { InfoMusicFooter } from './_components/infoMusicFooter';
import { Multimidia } from './_components/multimidia';
import { Sound } from './_components/sound';

export function Footer() {
    return (
        <main className={style.main}>
            <InfoMusicFooter />
            <Multimidia />
            <Sound />
        </main>
    )
}
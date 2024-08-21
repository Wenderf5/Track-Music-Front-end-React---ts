import style from './index.module.css';
import { InfoMusicFooter } from './_components/InfoMusicFooter';
import { Multimidia } from './_components/Multimidia';
import { Sound } from './_components/Sound';

export function Footer() {
    return (
        <main className={style.main}>
            <InfoMusicFooter />
            <Multimidia />
            <Sound />
        </main>
    )
}
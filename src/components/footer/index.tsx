import style from './index.module.css';
import { InfoMusicFooter } from './_components/InfoMusicFooter';
import { Multimidia } from './_components/Multimidia';
import { Sound } from './_components/Sound';

import capa from '../../assets/img/Capas/500x500-000000-80-0-0 (4).jpg';

export function Footer() {
    return (
        <main className={style.main}>
            <InfoMusicFooter />
            <Multimidia />
            <Sound />
        </main>
    )
}
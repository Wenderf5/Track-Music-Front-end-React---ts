import style from './index.module.css';
import { Playlists } from './_components/Playlists';

import capa1 from '../../../../assets/img/Capas/500x500-000000-80-0-0 (1).jpg'
import capa2 from '../../../../assets/img/Capas/500x500-000000-80-0-0 (2).jpg';
import capa3 from '../../../../assets/img/Capas/500x500-000000-80-0-0 (3).jpg';
import capa4 from '../../../../assets/img/Capas/500x500-000000-80-0-0 (4).jpg';
import capa5 from '../../../../assets/img/Capas/500x500-000000-80-0-0 (5).jpg';
import capa6 from '../../../../assets/img/Capas/500x500-000000-80-0-0.jpg';

export function TopPlaylists() {
    return (
        <main className={style.main}>
            <h2>Playlists em alta</h2>
            <div className={style.container_top}>
                <Playlists capa={capa6} />
                <Playlists capa={capa5} />
                <Playlists capa={capa4} />
                <Playlists capa={capa3} />
                <Playlists capa={capa2} />
                <Playlists capa={capa1} />
            </div>
        </main>
    )
}
import style from './index.module.css';
import { Music } from '../../../../components/Music';

import capa1 from '../../../../assets/img/Capas/500x500-000000-80-0-0 (1).jpg'
import capa2 from '../../../../assets/img/Capas/500x500-000000-80-0-0 (2).jpg';
import capa3 from '../../../../assets/img/Capas/500x500-000000-80-0-0 (3).jpg';
import capa4 from '../../../../assets/img/Capas/500x500-000000-80-0-0 (4).jpg';
import capa5 from '../../../../assets/img/Capas/500x500-000000-80-0-0 (5).jpg';
import capa6 from '../../../../assets/img/Capas/500x500-000000-80-0-0.jpg';

export function TopMusics() {
    return (
        <main className={style.main}>
            <h1>Musicas em alta</h1>
            <div className={style.container_top_musics}>
                <Music capa={capa1} />
                <Music capa={capa2} />
                <Music capa={capa3} />
                <Music capa={capa4} />
                <Music capa={capa5} />
                <Music capa={capa6} />
                <Music capa={capa1} />
                <Music capa={capa2} />
                <Music capa={capa3} />
                <Music capa={capa4} />
                <Music capa={capa5} />
                <Music capa={capa6} />
                <Music capa={capa1} />
                <Music capa={capa2} />
                <Music capa={capa3} />
                <Music capa={capa4} />
                <Music capa={capa5} />
                <Music capa={capa6} />
            </div>
        </main>
    )
}
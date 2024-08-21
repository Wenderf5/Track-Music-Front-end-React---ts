import style from './index.module.css';
import { Artists } from './_components/Artists';

import capa1 from '../../../../assets/img/Capas/500x500-000000-80-0-0 (1).jpg'
import capa2 from '../../../../assets/img/Capas/500x500-000000-80-0-0 (2).jpg';
import capa3 from '../../../../assets/img/Capas/500x500-000000-80-0-0 (3).jpg';
//import capa4 from '../../../../assets/img/Capas/500x500-000000-80-0-0 (4).jpg';
//import capa5 from '../../../../assets/img/Capas/500x500-000000-80-0-0 (5).jpg';
//import capa6 from '../../../../assets/img/Capas/500x500-000000-80-0-0.jpg';


export function TopArtists() {
    return (
        <main className={style.main}>
            <h2>Artistas em alta</h2>
            <div className={style.container_top}>
                <Artists capa={capa1}/>
                <Artists capa={capa2}/>
                <Artists capa={capa3}/>
                <Artists capa={capa1}/>
                <Artists capa={capa2}/>
                <Artists capa={capa3}/>
            </div>
        </main>
    )
}
import style from './index.module.css';
import Artist from './_components/Artist';

import capa1 from '../../../../assets/img/Capas/500x500-000000-80-0-0.jpg';
import capa2 from '../../../../assets/img/Capas/500x500-000000-80-0-0 (1).jpg';
import capa3 from '../../../../assets/img/Capas/500x500-000000-80-0-0 (2).jpg';
import capa4 from '../../../../assets/img/Capas/500x500-000000-80-0-0 (3).jpg';
import capa5 from '../../../../assets/img/Capas/500x500-000000-80-0-0 (4).jpg';
import capa6 from '../../../../assets/img/Capas/500x500-000000-80-0-0 (5).jpg';

function ContainerTopArtists() {
    return (
        <div className={style.divTopArtists}>
            <h2>Artistas em alta</h2>
            <div className={style.containerTopArtists}>
                <Artist img={capa6}/>
                <Artist img={capa5}/>
                <Artist img={capa4}/>
                <Artist img={capa3}/>
                <Artist img={capa2}/>
                <Artist img={capa1}/>
            </div>
        </div>
    )
}

export default ContainerTopArtists
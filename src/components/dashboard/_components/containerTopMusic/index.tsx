import style from './index.module.css';
import TopMusic from '../../../Music';

import capa1 from '../../../../assets/img/Capas/500x500-000000-80-0-0.jpg';
import capa2 from '../../../../assets/img/Capas/500x500-000000-80-0-0 (1).jpg';
import capa3 from '../../../../assets/img/Capas/500x500-000000-80-0-0 (2).jpg';
import capa4 from '../../../../assets/img/Capas/500x500-000000-80-0-0 (3).jpg';
import capa5 from '../../../../assets/img/Capas/500x500-000000-80-0-0 (4).jpg';
import capa6 from '../../../../assets/img/Capas/500x500-000000-80-0-0 (5).jpg';

function ContainerTopMusic() {
    return (
        <div className={style.divTopMusics}>
            <h2>Musicas em alta</h2>
            <div className={style.containerTopMusics}>
                <TopMusic img={capa2} />
                <TopMusic img={capa1} />
                <TopMusic img={capa6} />
                <TopMusic img={capa5} />
                <TopMusic img={capa4} />
                <TopMusic img={capa3} />
                <TopMusic img={capa2} />
                <TopMusic img={capa1} />
                <TopMusic img={capa6} />
                <TopMusic img={capa5} />
                <TopMusic img={capa4} />
                <TopMusic img={capa3} />
                <TopMusic img={capa2} />
                <TopMusic img={capa1} />
            </div>
        </div>
    )
}

export default ContainerTopMusic
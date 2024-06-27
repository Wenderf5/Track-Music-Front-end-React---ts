import style from './index.module.css';
import capa1 from '../../assets/img/Capas/500x500-000000-80-0-0.jpg';
import capa2 from '../../assets/img/Capas/500x500-000000-80-0-0 (1).jpg';
import capa3 from '../../assets/img/Capas/500x500-000000-80-0-0 (2).jpg';
import capa4 from '../../assets/img/Capas/500x500-000000-80-0-0 (3).jpg';
import capa5 from '../../assets/img/Capas/500x500-000000-80-0-0 (4).jpg';
import capa6 from '../../assets/img/Capas/500x500-000000-80-0-0 (5).jpg';

function TopArtist(){
    return(
        <main className={style.main}>
            <div className={style.ftArtist}>
                <img src={capa4} style={{width: "100%", borderRadius: "50%"}} alt="" />
            </div>
            <p style={{cursor: "pointer"}}>Top Artista</p>
        </main>
    )
}

export default TopArtist
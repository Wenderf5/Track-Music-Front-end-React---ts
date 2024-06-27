import style from './index.module.css';
import capa1 from '../../assets/img/Capas/500x500-000000-80-0-0.jpg';
import capa2 from '../../assets/img/Capas/500x500-000000-80-0-0 (1).jpg';
import capa3 from '../../assets/img/Capas/500x500-000000-80-0-0 (2).jpg';
import capa4 from '../../assets/img/Capas/500x500-000000-80-0-0 (3).jpg';
import capa5 from '../../assets/img/Capas/500x500-000000-80-0-0 (4).jpg';
import capa6 from '../../assets/img/Capas/500x500-000000-80-0-0 (5).jpg';

function TopPlaylist() {
    return (
        <main className={style.main}>
            <div className={style.ftPlaylist}>
                <img src={capa6} style={{ width: "100%", borderRadius: "6px" }} alt="" />
            </div>
            <p style={{ cursor: "pointer" }}>Top Artista</p>
        </main>
    )
}

export default TopPlaylist
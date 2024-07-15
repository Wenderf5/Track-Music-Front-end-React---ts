import style from './index.module.css';
import capa2 from '../../assets/img/Capas/500x500-000000-80-0-0 (1).jpg';
import InfoMusic from '../../components/infoMusic';
import BarPlaylists from '../../components/playlists';
import Dashboard from '../../components/dashboard';
import Footer from '../../components/footer';

function Home() {
    return (
        <main className={style.page}>
            <div className={style.divPricipal}>
                <BarPlaylists />
                <Dashboard />
                <InfoMusic img={capa2} />
            </div>
            <Footer />
        </main>
    )
}

export default Home
import style from './index.module.css';
import Search from '../../components/search';
import Buttom from '../../components/buttom';
import TopArtist from '../../components/topArtist';

function Home() {
    return (
        <main className={style.page}>
            <div className={style.containerSearch}>
                <Search />
                <Buttom type='playlist'/>
            </div>
            <div className={style.divTopArtists}>
                <h2>Top Artistas</h2>
                <div className={style.containerTopArtists}>
                    <TopArtist />
                    <TopArtist />
                    <TopArtist />
                    <TopArtist />
                    <TopArtist />
                    <TopArtist />
                </div>
            </div>
        </main>
    )
}

export default Home
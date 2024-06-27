import style from './index.module.css';
import Search from '../../components/search';
import Buttom from '../../components/buttom';
import TopArtist from '../../components/topArtist';
import TopPlaylist from '../../components/topPlaylists';

function Home() {
    return (
        <main className={style.page}>
            <div className={style.containerSearch}>
                <Search />
                <Buttom type='playlist' />
            </div>
            <div className={style.divTopArtists}>
                <h2>Artistas em alta</h2>
                <div className={style.containerTopArtists}>
                    <TopArtist />
                    <TopArtist />
                    <TopArtist />
                    <TopArtist />
                    <TopArtist />
                    <TopArtist />
                </div>
                <h2>Playlists em alta</h2>
                <div className={style.containerTopPlaylists}>
                    <TopPlaylist />
                    <TopPlaylist />
                    <TopPlaylist />
                    <TopPlaylist />
                    <TopPlaylist />
                    <TopPlaylist />
                </div>
            </div>
        </main>
    )
}

export default Home
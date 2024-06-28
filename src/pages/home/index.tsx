import style from './index.module.css';
import Search from '../../components/search';
import Buttom from '../../components/buttom';
import TopArtist from '../../components/topArtist';
import TopPlaylist from '../../components/topPlaylists';

function Home() {
    return (
        <main className={style.page}>
            <div className={style.divPricipal}>
                <div className={style.playlistBar}>
                    <Buttom type='playlist' />
                </div>
                <div className={style.dashborad}>
                    <div className={style.containerSearch}>
                        <Search />
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
                    </div>
                    <div className={style.divTopPlaylists}>
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
                </div>
            </div>
        </main>
    )
}

export default Home
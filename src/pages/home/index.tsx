import style from './index.module.css';
import Search from '../../components/search';
import Buttom from '../../components/buttom';
import TopArtist from '../../components/topArtist';
import TopPlaylist from '../../components/topPlaylists';
import MusicMenu from '../../components/musicMenu';
import MultiMedia from '../../components/multiMedia';
import Sound from '../../components/sound';
import Playlist from '../../components/playlist';

import capa1 from '../../assets/img/Capas/500x500-000000-80-0-0.jpg';
import capa2 from '../../assets/img/Capas/500x500-000000-80-0-0 (1).jpg';
import capa3 from '../../assets/img/Capas/500x500-000000-80-0-0 (2).jpg';
import capa4 from '../../assets/img/Capas/500x500-000000-80-0-0 (3).jpg';
import capa5 from '../../assets/img/Capas/500x500-000000-80-0-0 (4).jpg';
import capa6 from '../../assets/img/Capas/500x500-000000-80-0-0 (5).jpg';
import InfoMusic from '../../components/infoMusic';
import Music from '../../components/music';

function Home() {
    return (
        <main className={style.page}>
            <div className={style.divPricipal}>
                <div className={style.playlistBar}>
                    <div className={style.containerbtnPlaylistbar}>
                        <Buttom type='playlist' />
                    </div>
                    <div className={style.divPlaylist}>
                        <Playlist capa={capa6} />
                        <Playlist capa={capa2} />
                        <Playlist capa={capa3} />
                        <Playlist capa={capa4} />
                        <Playlist capa={capa5} />
                        <Playlist capa={capa1} />
                    </div>
                </div>
                <div className={style.dashborad}>
                    <div className={style.containerSearch}>
                        <Search />
                    </div>
                    <div className={style.divTopArtists}>
                        <h2>Artistas em alta</h2>
                        <div className={style.containerTopArtists}>
                            <TopArtist img={capa1} />
                            <TopArtist img={capa2} />
                            <TopArtist img={capa3} />
                            <TopArtist img={capa4} />
                            <TopArtist img={capa5} />
                            <TopArtist img={capa6} />
                        </div>
                    </div>
                    <div className={style.divTopPlaylists}>
                        <h2>Playlists em alta</h2>
                        <div className={style.containerTopPlaylists}>
                            <TopPlaylist img={capa6} />
                            <TopPlaylist img={capa5} />
                            <TopPlaylist img={capa4} />
                            <TopPlaylist img={capa3} />
                            <TopPlaylist img={capa2} />
                            <TopPlaylist img={capa1} />
                        </div>
                    </div>
                    <div className={style.divTopMusics}>
                        <h2>Musicas em alta</h2>
                        <div className={style.containerTopMusics}>
                            <Music img={capa2}/>
                            <Music img={capa1}/>
                            <Music img={capa6}/>
                            <Music img={capa5}/>
                            <Music img={capa4}/>
                            <Music img={capa3}/>
                            <Music img={capa2}/>
                            <Music img={capa1}/>
                            <Music img={capa6}/>
                            <Music img={capa5}/>
                            <Music img={capa4}/>
                            <Music img={capa3}/>
                            <Music img={capa2}/>
                            <Music img={capa1}/>
                        </div>
                    </div>
                </div>
                <div className={style.infoMusicBar}>
                    <InfoMusic img={capa2} />
                </div>
            </div>
            <div className={style.divMusicBar}>
                <MusicMenu />
                <MultiMedia />
                <Sound />
            </div>
        </main>
    )
}

export default Home
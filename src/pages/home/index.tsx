import style from './index.module.css';
import { useState } from 'react';
import capa2 from '../../assets/img/Capas/500x500-000000-80-0-0 (1).jpg';
import InfoMusic from '../../components/infoMusic';
import Playlists from '../../components/playlists';
import Footer from '../../components/footer';
import Search from '../../components/search';
import TopArtists from './_components/topArtists';
import TopPlaylists from './_components/topPlaylists';
import TopMusic from './_components/topMusic';
import SearchMusicPage from '../../components/searchMusicPage';

function Home() {
    const [searchIsVisible, setSearchIsVisible] = useState(false);

    return (
        <main className={style.page}>
            <div className={style.divPricipal}>
                <div className={style.containerPlaylist}>
                    <Playlists />
                </div>
                <div className={style.dashborad}>
                    <div className={style.containerSearch}>
                        <Search setSearchIsVisible={setSearchIsVisible} />
                    </div>
                    {!searchIsVisible && (
                        <>
                            <TopArtists />
                            <TopPlaylists />
                            <TopMusic />
                        </>
                    )}
                    {searchIsVisible && (
                        <SearchMusicPage />
                    )}
                </div>
                <InfoMusic img={capa2} />
            </div>
            <Footer />
        </main>
    )
}

export default Home
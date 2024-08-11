import style from './index.module.css';
import { useState } from 'react';
import capa2 from '../../assets/img/Capas/500x500-000000-80-0-0 (5).jpg';
import InfoMusic from '../../components/infoMusic';
import Footer from '../../components/footer';
import Search from '../../components/search';
import TopArtists from './_components/topArtists';
import TopPlaylists from './_components/topPlaylists';
import TopMusic from './_components/topMusic';
import SearchMusicPage from '../../components/searchMusicPage';
import BtnHome from '../../components/btnHome';

function Home() {
    const [searchIsVisible, setSearchIsVisible] = useState(false);

    return (
        <main className={style.main}>
            <div className={style.container_central}>
                <div className={style.container_principal}>
                    <div className={style.dashborad}>
                        <div className={style.container_search}>
                            <Search setSearchIsVisible={setSearchIsVisible} searchIsVisible={searchIsVisible} />
                            <div onClick={() => setSearchIsVisible(false)}>
                                <BtnHome />
                            </div>
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
            </div>
        </main>
    )
}

export default Home
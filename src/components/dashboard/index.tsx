import style from './index.module.css';
import { useState } from 'react';
import Search from './_components/search';
import TopArtists from './_components/topArtists';
import TopPlaylists from './_components/topPlaylists';
import TopMusic from './_components/topMusic';
import SearchMusic from '../SearchMusic';

function Dashboard() {
    const [SearchIsVisible, setSearchIsVisible] = useState(false);

    return (
        <div className={style.dashborad}>
            <div className={style.containerSearch}>
                <Search setSearchIsVisible={setSearchIsVisible} />
            </div>
            {!SearchIsVisible && (
                <>
                    <TopArtists />
                    <TopPlaylists />
                    <TopMusic />
                </>
            )}
            {SearchIsVisible && (
                <SearchMusic />
            )}
        </div>
    )
}

export default Dashboard
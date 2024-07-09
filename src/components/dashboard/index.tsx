import style from './index.module.css';
import { useState } from 'react';
import Search from './_components/search';
import ContainerTopArtists from './_components/containerTopArtists';
import ContainerTopPlaylists from './_components/containerTopPlaylists';
import ContainerTopMusic from './_components/containerTopMusic';
import ContainerSearchMusic from '../containerSearchMusic';

function Dashboard() {
    const [search, setSearch] = useState(false);

    return (
        <div className={style.dashborad}>
            <div className={style.containerSearch}>
                <Search setSearch={setSearch} />
            </div>
            {!search && (
                <>
                    <ContainerTopArtists />
                    <ContainerTopPlaylists />
                    <ContainerTopMusic />
                </>
            )}
            {search && (
                <ContainerSearchMusic />
            )}
        </div>
    )
}

export default Dashboard
import style from './index.module.css';
import { useState } from 'react';
import Search from './_components/search';
import ContainerTopArtists from './_components/containerTopArtists';
import ContainerTopPlaylists from './_components/containerTopPlaylists';
import ContainerTopMusic from './_components/containerTopMusic';
import ContainerSearchMusic from '../containerSearchMusic';

function Dashboard() {
    const [containerSearchIsVisible, setContainerSearchIsVisible] = useState(false);

    return (
        <div className={style.dashborad}>
            <div className={style.containerSearch}>
                <Search setContainerSearchIsVisible={setContainerSearchIsVisible} />
            </div>
            {!containerSearchIsVisible && (
                <>
                    <ContainerTopArtists />
                    <ContainerTopPlaylists />
                    <ContainerTopMusic />
                </>
            )}
            {containerSearchIsVisible && (
                <ContainerSearchMusic />
            )}
        </div>
    )
}

export default Dashboard
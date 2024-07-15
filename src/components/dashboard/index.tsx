import style from './index.module.css';
import { useState } from 'react';
import Search from './_components/search';
import TopArtists from './_components/topArtists';
import TopPlaylists from './_components/topPlaylists';
import TopMusic from './_components/topMusic';
import SearchMusicPage from '../searchMusicPage';
import PlaylistPage from '../playlistPage';

function Dashboard() {
    const [searchIsVisible, setSearchIsVisible] = useState(false);
    const [playlistIsVisible, setPlaylistIsVisible] = useState(false);

    return (
        <div className={style.dashborad}>
            {!playlistIsVisible && (
                <div className={style.containerSearch}>
                    <Search setSearchIsVisible={setSearchIsVisible} />
                </div>
            )}
            {!searchIsVisible && !playlistIsVisible && (
                <>
                    <TopArtists />
                    <TopPlaylists />
                    <TopMusic />
                </>
            )}
            {searchIsVisible && (
                <SearchMusicPage />
            )}
            {playlistIsVisible && (
                <PlaylistPage setPlaylistIsVisible={setPlaylistIsVisible} playlistIsVisible={playlistIsVisible}/>
            )}
        </div>
    )
}

export default Dashboard
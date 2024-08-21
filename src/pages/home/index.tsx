import style from './index.module.css';
import { useState } from 'react';
import { InputSearch } from '../../components/Search';
import { TopArtists } from './_components/TopArtists';
import { TopPlaylists } from './_components/TopPlaylists';
import { TopMusics } from './_components/TopMusics';
import { InfoMusic } from '../../components/InfoMusic';
import { SearchMusic } from '../../components/SearchMusic';
import { Footer } from '../../components/Footer';

export function Home() {
    const [searchIsVisible, setSearchIsVisible] = useState(false);

    return (
        <main className={style.main}>
            <div className={style.container_principal}>
                <section className={style.dashboard}>
                    <InputSearch searchIsVisible={searchIsVisible} setSearchIsVisible={setSearchIsVisible} />
                    {!searchIsVisible && (
                        <>
                            <TopArtists />
                            <TopPlaylists />
                            <TopMusics />
                        </>
                    )}
                    {searchIsVisible && (
                        <SearchMusic />
                    )}
                </section>
                <InfoMusic />
            </div>
            <Footer />
        </main>
    )
}
import style from './index.module.css';
import { useState } from 'react';
import { InputSearch } from '../../components/inputSearch';
import { TopArtists } from './_components/topArtists';
import { TopPlaylists } from './_components/topPlaylists';
import { TopMusics } from './_components/topMusics';
import { InfoMusic } from '../../components/infoMusic';
import { SearchMusic } from '../../components/searchMusic';
import { Footer } from '../../components/footer';

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
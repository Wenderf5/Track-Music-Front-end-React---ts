import style from './index.module.css';
import { NavBar } from '../../components/NavBar';
import { TopArtists } from './_components/TopArtists';
import { TopPlaylists } from './_components/TopPlaylists';
import { TopMusics } from './_components/TopMusics';
import { InfoMusic } from '../../components/InfoMusic';
import { Footer } from '../../components/Footer';

export function Home() {
    return (
        <main className={style.main}>
            <div className={style.container_principal}>
                <section className={style.dashboard}>
                    <NavBar />
                    <TopArtists />
                    <TopPlaylists />
                    <TopMusics />
                </section>
                <InfoMusic />
            </div>
            <Footer />
        </main>
    )
}
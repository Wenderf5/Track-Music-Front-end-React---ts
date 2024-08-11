import style from './index.module.css';
import { Search } from 'lucide-react';

export function NavBar() {
    return (
        <main className={style.main}>
            <input className={style.input} type="text" placeholder='Pesquise por alguma musica...'/>
            <Search color='white' />
        </main>
    )
}
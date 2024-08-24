//CSS
import style from './index.module.css';

//Icons
import { House } from 'lucide-react';

export function Button() {
    return (
        <main className={style.main}>
            <button className={style.button}><House color='white' size={30} /></button>
        </main>
    )
}
import style from './index.module.css';
import { House } from 'lucide-react';

function BtnHome() {
    return (
        <main className={style.main}>
            <House color='rgb(134, 134, 134)' size={27}/>
        </main>
    )
}

export default BtnHome;
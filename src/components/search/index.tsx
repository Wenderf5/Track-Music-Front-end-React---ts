import style from './index.module.css';
import Button from './_components/button';

function Search() {
    return (
        <main className={style.divSearch}>
            <input className={style.inputSearch} type="text" placeholder='Procure por uma musica...' />
            <Button />
        </main>
    )
}

export default Search;
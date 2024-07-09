import style from './index.module.css';
import Button from './_components/button';
import { useEffect, useState } from 'react';

interface props {
    setSearch: React.Dispatch<React.SetStateAction<boolean>>
}

function Search({ setSearch }: props) {
    const [inputValue, setInputValue] = useState<string>("");
    function getInputValue(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value);
    }
    useEffect(() => {
        if (inputValue != "") {
            setSearch(true)
        } else {
            setSearch(false)
        }
    }, [inputValue])

    return (
        <main className={style.divSearch}>
            <input className={style.inputSearch} onChange={getInputValue} type="text" placeholder='Procure por uma musica...' />
            <Button />
        </main>
    )
}

export default Search;
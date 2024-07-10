import style from './index.module.css';
import Button from './_components/button';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { MusicsContext } from '../../../../context/musics';

interface props {
    setSearch: React.Dispatch<React.SetStateAction<boolean>>
}

function Search({ setSearch }: props) {
    const context = useContext(MusicsContext);
    if (!context) {
        throw new Error("Erro no context");
    }
    const { setValor } = context;
    const [inputValue, setInputValue] = useState<string>("");
    function getInputValue(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value);
    }
    useEffect(() => {
        async function asd() {
            const response = await fetch(`https://api.deezer.com/search?q=${inputValue}`, {
                method: 'GET'
            })
            const data = await response.json()
            setValor(data)
            if (inputValue != "") {
                setSearch(true)
            } else {
                setSearch(false)
            }
        }
        asd()
    }, [inputValue])

    return (
        <main className={style.divSearch}>
            <input className={style.inputSearch} onChange={getInputValue} type="text" placeholder='Procure por uma musica...' />
            <Button />
        </main>
    )
}

export default Search;
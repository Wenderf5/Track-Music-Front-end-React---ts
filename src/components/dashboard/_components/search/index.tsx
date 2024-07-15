import style from './index.module.css';
import search from '../../../../assets/icons/search-regular-240.png';
import { useEffect, useState, useContext } from 'react';
import { MusicsContext } from '../../../../context/musics';
import { useDebounce } from '../../../../hooks/useDebounce';

interface props {
    setSearchIsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

function Search({ setSearchIsVisible }: props) {
    const musicsContext = useContext(MusicsContext);
    if (!musicsContext) {
        throw new Error("Erro no context");
    }
    const { setMusics } = musicsContext;
    const [inputValue, setInputValue] = useState<string>("");
    const debouncedInputValue = useDebounce(inputValue, 200);

    function getInputValue(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value);
    }

    useEffect(() => {
        try {
            async function fetchData() {
                if (debouncedInputValue) {
                    const response = await fetch(`https://api.deezer.com/search?q=${debouncedInputValue}`, {
                        method: 'GET'
                    });
                    const data = await response.json();
                    setMusics(data);
                    setSearchIsVisible(true);
                } else {
                    setSearchIsVisible(false);
                }
            }
            fetchData();
        } catch (error) {
            console.log(`Erro ao pesquisar musica: ${error}`);
        }
    }, [debouncedInputValue]);

    return (
        <main className={style.divSearch}>
            <input className={style.inputSearch} onChange={getInputValue} type="text" placeholder='Procure por uma musica...' />
            <button className={style.button}>
                <img src={search} width={"100%"} height={"85%"} alt="search" />
            </button>
        </main>
    );
}

export default Search;

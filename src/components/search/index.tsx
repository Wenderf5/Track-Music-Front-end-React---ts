import style from './index.module.css';
import search from '../../assets/icons/search-regular-240.png';
import { useEffect, useState, useContext } from 'react';
import { MusicsContext } from '../../context/musics';
import { useDebounce } from '../../hooks/useDebounce';

interface props {
    setSearchIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
    searchIsVisible: boolean;
}

function Search({ setSearchIsVisible, searchIsVisible }: props) {
    const musicsContext = useContext(MusicsContext);
    if (!musicsContext) {
        throw new Error('Erro no contexto "musicsContext" Search linha 15.');
    }
    const { setMusics } = musicsContext;
    const [inputValue, setInputValue] = useState<string>("");
    const debouncedInputValue = useDebounce(inputValue, 200);

    function getInputValue(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value);
    }

    useEffect(() => {
        if (!searchIsVisible) {
            setInputValue("");
        }
    }, [searchIsVisible]);

    useEffect(() => {
        try {
            async function fetchData() {
                if (debouncedInputValue) {
                    const response = await fetch(`https://track-music-server.vercel.app/music/${debouncedInputValue}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json'
                        }
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
            <input className={style.inputSearch} onChange={getInputValue} type="text" placeholder='Procure por uma musica...' value={inputValue} />
            <button className={style.button}>
                <img src={search} width={"100%"} height={"85%"} alt="search" />
            </button>
        </main>
    );
}

export default Search;

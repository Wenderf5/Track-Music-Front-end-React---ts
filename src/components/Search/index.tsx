import style from './index.module.css';
import { useState, useEffect, useContext } from 'react';
import { MusicsContext } from '../../context/musicsContext';
import { Search } from 'lucide-react';
import { useDebounce } from '../../hooks/useDebounce';
//import { interfaceMusics } from '../../types/musics';

interface props {
    searchIsVisible: boolean;
    setSearchIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function InputSearch({ setSearchIsVisible }: props) {
    const musicsContext = useContext(MusicsContext);
    if (!musicsContext) {
        return "Erro no contexto 'src/components/Search' linha 15.";
    }
    const { setMusics } = musicsContext;
    const [inputValue, setInputValue] = useState<string>("");
    const debounceValue = useDebounce(inputValue, 200);

    function getInputValue(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
    }

    useEffect(() => {
        if (inputValue.length < 1) {
            setSearchIsVisible(false);
        }
    }, [inputValue]);

    useEffect(() => {
        try {
            if (debounceValue) {
                async function fetchData() {
                    const response = await fetch(`https://track-music-server.vercel.app/music/${debounceValue}`, {
                        method: 'GET'
                    });
                    const data = await response.json();
                    setMusics(data);
                    setSearchIsVisible(true);
                }
                fetchData();
            }
        } catch (error) {
            console.log(`Erro ao pesquisar musica: ${error}`);
        }
    }, [debounceValue]);

    return (
        <main className={style.main}>
            <input
                className={style.input}
                type="text"
                placeholder='Pesquise por alguma musica...'
                onChange={getInputValue}
            />
            <Search color='white' />
        </main>
    )
}
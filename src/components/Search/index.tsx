import style from './index.module.css';
import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

interface props {
    setSearchIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export function InputSearch({ setSearchIsVisible }: props) {
    const [inputValue, setInputValue] = useState<string>("");
    function getInputValue(event: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(event.target.value);
    }

    useEffect(() => {
        if (inputValue.length >= 1) {
            setSearchIsVisible(true);
        } else {
            setSearchIsVisible(false);
        }
    }, [inputValue]);

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
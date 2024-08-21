import style from './index.module.css';
import { Music } from '../Music';
import { useContext } from 'react';
import { MusicsContext } from '../../context/musicsContext';

export function SearchMusic() {
    const musicsContext = useContext(MusicsContext);
    if (!musicsContext) {
        return "Erro no contexto 'src/components/SearchMusic' linha 9.";
    }
    const { musics } = musicsContext;

    return (
        <main className={style.main}>
            <h3>Resultado da pesquisa:</h3>
            <div className={style.container_musics}>
                {musics?.map((track, index) => (
                    <Music key={index} music={track} />
                ))}
            </div>
        </main>
    )
}
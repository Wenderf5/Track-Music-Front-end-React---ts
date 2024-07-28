import style from './index.module.css';
import Music from '../Music';
import { useContext } from 'react';
import { MusicsContext } from '../../context/musics';
import { interfaceTrack } from '../../types/track';

function SearchMusicPage() {
    const musicsContext = useContext(MusicsContext);
    if (!musicsContext) {
        throw new Error('Erro no contexto "musicsContext" SearchMusicPage linha 9.');
    }
    const { musics } = musicsContext;

    return (
        <main className={style.main}>
            <h3>Resultado da pesquisa:</h3>
            {musics?.map((track: interfaceTrack, index: number) => (
                <Music key={index} track={track} />
            ))}
        </main>
    )
}

export default SearchMusicPage
import style from './index.module.css';
import Music from '../Music';
import { useContext } from 'react';
import { MusicsContext } from '../../context/musics';

function ContainerSearchMusic() {
    const musicsContext = useContext(MusicsContext);
    if (!musicsContext) {
        throw new Error("Erro no context");
    }
    const { musics } = musicsContext;

    return (
        <main className={style.main}>
            <h3>Resultado da pesquisa:</h3>
            {musics.data.map((track: object, index: number) => (
                <Music key={index} track={track} />
            ))}
        </main>
    )
}

export default ContainerSearchMusic
import style from './index.module.css';
import TopMusic from '../Music';
import { useContext } from 'react';
import { MusicsContext } from '../../context/musics';

function ContainerSearchMusic() {
    const context = useContext(MusicsContext);
    if (!context) {
        throw new Error("Erro no context");
    }
    const { valor } = context;

    return (
        <main className={style.main}>
            <h3>Resultado da pesquisa:</h3>
            {valor.data.map((track: object, index: any) => (
                <TopMusic key={index} track={track} />
            ))}
        </main>
    )
}

export default ContainerSearchMusic
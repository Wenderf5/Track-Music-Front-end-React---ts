import style from './index.module.css';
import { interfaceTopArtists } from '../../../../../../types/topArtists';

interface Props {
    artist: interfaceTopArtists;
}

function Artist({ artist }: Props) {
    const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        event.currentTarget.src = 'fallback-image-url';
    };

    return (
        <main className={style.main}>
            <div className={style.ftArtist}>
                <img
                    className={style.artistFt}
                    src={artist.picture}
                    alt={`Foto do artista`}
                    onError={handleError}
                />
            </div>
            <p style={{
                cursor: "pointer",
                overflow: 'hidden',
                whiteSpace: "nowrap",
                width: "80%",
                textOverflow: "ellipsis",
                textAlign: "center"
            }}>{artist.name}</p>
        </main>
    );
}

export default Artist;

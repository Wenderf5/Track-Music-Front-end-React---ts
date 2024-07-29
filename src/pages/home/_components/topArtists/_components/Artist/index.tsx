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
                    src={artist.picture} 
                    style={{ width: "100%", borderRadius: "50%" }} 
                    alt={`Foto do artista`} 
                    onError={handleError} 
                />
            </div>
            <p style={{ cursor: "pointer" }}>{artist.name}</p>
        </main>
    );
}

export default Artist;

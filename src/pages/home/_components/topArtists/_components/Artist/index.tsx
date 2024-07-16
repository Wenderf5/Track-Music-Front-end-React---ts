import style from './index.module.css';

interface props {
    artist: any
}

function Artist({ artist }: props) {
    console.log(artist);
    return (
        <main className={style.main}>
            <div className={style.ftArtist}>
                <img src={artist.picture_big} style={{ width: "100%", borderRadius: "50%" }} alt="" />
            </div>
            <p style={{ cursor: "pointer" }}>{artist.name}</p>
        </main>
    )
}

export default Artist
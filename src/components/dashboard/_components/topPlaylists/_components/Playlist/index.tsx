import style from './index.module.css';

interface props {
    playlist: any
}

function Playlist({ playlist }: props) {
    return (
        <main className={style.main}>
            <div className={style.ftPlaylist}>
                <img src={playlist.picture_big} style={{ width: "100%", borderRadius: "6px" }} alt="" />
            </div>
            <p style={{ cursor: "pointer" }}>{playlist.title}</p>
        </main>
    )
}

export default Playlist
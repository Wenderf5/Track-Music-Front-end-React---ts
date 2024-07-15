import style from './index.module.css';

interface props{
    img: any
}

function Playlist(props: props) {
    return (
        <main className={style.main}>
            <div className={style.ftPlaylist}>
                <img src={props.img} style={{ width: "100%", borderRadius: "6px" }} alt="" />
            </div>
            <p style={{ cursor: "pointer" }}>Top Playlist</p>
        </main>
    )
}

export default Playlist
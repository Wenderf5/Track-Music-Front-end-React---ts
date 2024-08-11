import style from './index.module.css';

interface props {
    capa: any;
}

export function Playlists({ capa }: props) {
    return (
        <main className={style.main}>
            <img className={style.img} src={capa} alt="" />
            <span className={style.playlist_name} >Playlist Name</span>
        </main>
    )
}
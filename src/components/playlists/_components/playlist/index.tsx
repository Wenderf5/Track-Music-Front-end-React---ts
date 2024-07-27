import Buttom from '../../../button';
import style from './index.module.css';
import { Trash2 } from 'lucide-react';

interface props {
    expanded: boolean
    playlist: any
}

function Playlist({ expanded, playlist }: props) {
    return (
        <main className={style.main}>
            <div className={expanded ? style.ftTXTExpanded : style.ftTXT}>
                <div className={expanded ? style.ftPlaylistExpanded : style.ftPlaylist}>
                    <img src={playlist.img} width={"100%"} height={"100%"} style={{ borderRadius: "6px" }} alt="" />
                </div>
                {expanded && (
                    <div className={style.infoPlaylist}>
                        <span className={expanded ? style.playlistNameExpanded : style.playlistName}>{playlist.playlistName}</span>
                        <span className={style.creationDate}>Data de criação: {playlist.creation_date}</span>
                    </div>
                )}
            </div>
            <div className={expanded ? style.iconeTrashExpanded : style.iconeTrash}>
                <Buttom icone={<Trash2 color='white' />} type="music" />
            </div>
        </main>
    )
}

export default Playlist
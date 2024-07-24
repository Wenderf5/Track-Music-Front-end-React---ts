import style from './index.module.css';
import { useContext, useState } from 'react';
import { PlaylistContext } from '../../../../context/playlist';
import Buttom from './_components/buttom';

interface props {
    newPlaylistIsVisible: boolean;
    setNewPlaylistIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

function NewPlaylist({ newPlaylistIsVisible, setNewPlaylistIsVisible }: props) {
    const [inputValue, setInputValue] = useState<string>("");
    function getInputValue(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value)
    }
    const playlistContext = useContext(PlaylistContext);
    if (!playlistContext) {
        throw new Error("Erro no contexto playlists linha 20");
    }
    const { playlists } = playlistContext;

    function newPlaylist() {
        playlists.push({
            playlistName: inputValue,
            id: 2,
            musics: [
                {
                    title: "Music Name",
                    preview: "dwadwadawdawda",
                    artist: {
                        name: "Artist Name"
                    },
                    album: {
                        title: "Album Name",
                        cover_big: "dawdadwa"
                    }
                }
            ]
        })
    }

    return (
        <main className={style.main}>
            <div className={style.txtNovaPlaylist}>
                <span>Nova playlist</span>
            </div>
            <div className={style.containerInput}>
                <input className={style.inputTXT} onChange={getInputValue} type="text" placeholder='Nome da playlist' />
                <Buttom txt='Foto' />
            </div>
            <div className={style.containerBTN}>
                <div onClick={() => setNewPlaylistIsVisible(!newPlaylistIsVisible)}>
                    <Buttom txt='Cancelar' />
                </div>
                <div onClick={() => setNewPlaylistIsVisible(!newPlaylistIsVisible)}>
                    <Buttom txt='Salvar' func={newPlaylist} />
                </div>
            </div>
        </main>
    )
}

export default NewPlaylist;
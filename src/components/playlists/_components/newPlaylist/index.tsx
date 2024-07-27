import React, { useContext, useState } from 'react';
import style from './index.module.css';
import { PlaylistContext } from '../../../../context/playlist';
import Buttom from './_components/buttom';

interface Props {
    newPlaylistIsVisible: boolean;
    setNewPlaylistIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewPlaylist: React.FC<Props> = ({ newPlaylistIsVisible, setNewPlaylistIsVisible }) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [Photograph, setPhotograph] = useState<string | null>(null);
    const playlistContext = useContext(PlaylistContext);

    if (!playlistContext) {
        throw new Error("Erro no contexto playlists linha 20");
    }

    const { playlists } = playlistContext;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhotograph(reader.result as string);
            };
            reader.readAsDataURL(selectedFile);
        } else {
            setPhotograph(null);
        }
    }

    const newPlaylist = () => {
        const year = new Date().getFullYear();
        const month = new Date().getMonth() + 1;
        const day = new Date().getDate();

        playlists.push({
            id: playlists.length + 1,
            playlistName: inputValue,
            creation_date: `${year}-${month < 10 ? `0` + month : month}-${day < 10 ? `0` + day : day}`,
            img: Photograph,
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
        });
    }

    return (
        <main className={style.main}>
            <div className={style.txtNovaPlaylist}>
                <span>Nova playlist</span>
            </div>
            <div className={style.containerInput}>
                <input className={style.inputTXT} onChange={handleInputChange} type="text" placeholder='Nome da playlist' />
                <label className={style.customFileUpload}>
                    <input type="file" onChange={handleFileChange} accept="image/*" />
                    Foto
                </label>
            </div>
            <div className={style.containerBTN}>
                <div onClick={() => setNewPlaylistIsVisible(!newPlaylistIsVisible)}>
                    <Buttom txt='Cancelar' />
                </div>
                <div onClick={() => { newPlaylist(); setNewPlaylistIsVisible(!newPlaylistIsVisible); }}>
                    <Buttom txt='Salvar' />
                </div>
            </div>
        </main>
    );
}

export default NewPlaylist;

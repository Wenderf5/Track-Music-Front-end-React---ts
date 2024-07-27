import React, { useContext, useState } from 'react';
import style from './index.module.css';
import { PlaylistContext } from '../../../../context/playlist';
import Button from './_components/buttom';

interface Props {
    newPlaylistIsVisible: boolean;
    setNewPlaylistIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewPlaylist: React.FC<Props> = ({ newPlaylistIsVisible, setNewPlaylistIsVisible }) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [photograph, setPhotograph] = useState<string | undefined>(undefined);
    const playlistContext = useContext(PlaylistContext);

    if (!playlistContext) {
        throw new Error("Erro no contexto playlists linha 20");
    }

    const { playlists, setPlaylists } = playlistContext;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhotograph(reader.result as string);
            };
            reader.readAsDataURL(selectedFile);
        } else {
            setPhotograph(undefined);
        }
    }

    const newPlaylist = () => {
        if (!inputValue.trim()) {
            alert("O nome da playlist não pode estar vazio.");
            return;
        }

        const newPlaylist = {
            id: playlists.length + 1,
            playlistName: inputValue,
            creation_date: new Date().toISOString().split('T')[0],
            img: photograph,
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
        };

        setPlaylists([...playlists, newPlaylist]);
    }

    return (
        <main className={style.main}>
            <div className={style.txtNovaPlaylist}>
                <span>Nova playlist</span>
            </div>
            <div className={style.containerInput}>
                <input 
                    className={style.inputTXT} 
                    onChange={handleInputChange} 
                    type="text" 
                    placeholder='Nome da playlist' 
                    aria-label="Nome da playlist"
                />
                <label className={style.customFileUpload}>
                    <input 
                        type="file" 
                        onChange={handleFileChange} 
                        accept="image/*" 
                        aria-label="Carregar foto da playlist"
                    />
                    Foto
                </label>
            </div>
            <div className={style.containerBTN}>
                <div onClick={() => setNewPlaylistIsVisible(!newPlaylistIsVisible)}>
                    <Button txt='Cancelar' />
                </div>
                <div onClick={() => { newPlaylist(); setNewPlaylistIsVisible(!newPlaylistIsVisible); }}>
                    <Button txt='Salvar' />
                </div>
            </div>
        </main>
    );
}

export default NewPlaylist;

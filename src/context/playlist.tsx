import { createContext, useState } from "react";
import { interfaceTrack } from "../types/track";
import capa from '../assets/img/Capas/500x500-000000-80-0-0 (1).jpg';

interface playlistInterface {
    playlists: [
        {
            id: number,
            playlistName: string,
            creation_date: string,
            img: string | null,
            musics: interfaceTrack[]
        }
    ];
    setPlaylists: React.Dispatch<React.SetStateAction<[{ id: number, playlistName: string, creation_date: string, img: string | null, musics: interfaceTrack[] }]>>;
}

export const PlaylistContext = createContext<playlistInterface | undefined>(undefined);

export function PlaylistContextProvider({ children }: { children: React.ReactNode }) {
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const day = new Date().getDay();
    const [playlists, setPlaylists] = useState<[{ id: number, playlistName: string, creation_date: string, img: string | null, musics: interfaceTrack[] }]>([
        {
            id: 1,
            playlistName: "Playlist 1",
            creation_date: `${year}-${month < 10 ? `0` + month : month}-${day < 10 ? `0` + day : day}`,
            img: capa,
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
        }
    ]);

    return (
        <PlaylistContext.Provider value={{ playlists, setPlaylists }}>
            {children}
        </PlaylistContext.Provider>
    )
}
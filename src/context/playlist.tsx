import { createContext, useState } from "react";
import { interfaceTrack } from "../types/track";

interface playlistInterface {
    playlists: [
        {
            id: number,
            playlistName: string,
            creation_date: string,
            musics: interfaceTrack[]
        }
    ];
    setPlaylists: React.Dispatch<React.SetStateAction<[{ id: number, playlistName: string, creation_date: string, musics: interfaceTrack[] }]>>;
}

export const PlaylistContext = createContext<playlistInterface | undefined>(undefined);

export function PlaylistContextProvider({ children }: { children: React.ReactNode }) {
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const day = new Date().getDay();
    const [playlists, setPlaylists] = useState<[{ id: number, playlistName: string, creation_date: string, musics: interfaceTrack[] }]>([
        {
            id: 1,
            playlistName: "Playlist 1",
            creation_date: `${year}-${month < 10 ? `0` + month : month}-${day < 10 ? `0` + day : day}`,
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
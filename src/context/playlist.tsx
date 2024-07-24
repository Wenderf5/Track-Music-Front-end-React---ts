import { createContext, useState } from "react";
import { interfaceTrack } from "../types/track";

interface playlistInterface {
    playlists: [
        {
            id: number,
            playlistName: string,
            musics: interfaceTrack[]
        }
    ];
    setPlaylists: React.Dispatch<React.SetStateAction<[{ id: number, playlistName: string, musics: interfaceTrack[] }]>>;
}

export const PlaylistContext = createContext<playlistInterface | undefined>(undefined);

export function PlaylistContextProvider({ children }: { children: React.ReactNode }) {
    const [playlists, setPlaylists] = useState<[{ id: number, playlistName: string, musics: interfaceTrack[] }]>([
        {
            id: 1,
            playlistName: "Playlist 1",
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
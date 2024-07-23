import { createContext, useState } from "react";

interface playlistInterface {
    playlists: any
    setPlaylists: React.Dispatch<React.SetStateAction<any>>
}

export const PlaylistContext = createContext<playlistInterface | undefined>(undefined);

export function PlaylistContextProvider({ children }: { children: React.ReactNode }) {
    const [playlists, setPlaylists] = useState<any>([
        {
            playlistName: "Playlist 1",
            id: 1,
            musics: [
                {
                    title: "Music Name",
                    Preview: "dwadwadawdawda",
                    artist: {
                        name: "Artist Name"
                    },
                    Album: {
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
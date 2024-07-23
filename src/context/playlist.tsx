import { createContext, useState } from "react";

interface playlistInterface {
    playlists: object[];
    setPlaylists: React.Dispatch<React.SetStateAction<object[]>>;
}

export const PlaylistContext = createContext<playlistInterface | undefined>(undefined);

export function PlaylistContextProvider({ children }: { children: React.ReactNode }) {
    const [playlists, setPlaylists] = useState<object[]>([
        {
            id: 1,
            playlistName: "Playlist 1",
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
import { createContext, useState } from "react";

interface contexType {
    track: any
    setTrack: any
}

export const CurrentMusicContext = createContext<contexType | undefined>(undefined);

export function CurrentMusicContextProvider({ children }: { children: React.ReactNode }) {
    const [track, setTrack] = useState<any>(undefined);

    return (
        <CurrentMusicContext.Provider value={{ track, setTrack }}>
            {children}
        </CurrentMusicContext.Provider>
    )
}
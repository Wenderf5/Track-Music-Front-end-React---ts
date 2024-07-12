import { createContext, useState } from "react";

interface contexType {
    currentMusic: any
    setCurrentMusic: any
}

export const CurrentMusicContext = createContext<contexType | undefined>(undefined);

export function CurrentMusicContextProvider({ children }: { children: React.ReactNode }) {
    const [currentMusic, setCurrentMusic] = useState<any>(undefined);

    return (
        <CurrentMusicContext.Provider value={{ currentMusic, setCurrentMusic }}>
            {children}
        </CurrentMusicContext.Provider>
    )
}
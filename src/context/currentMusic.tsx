import { createContext, useState } from "react";

interface contexType {
    currentMusic: any
    setCurrentMusic: any
    currentMusicDuration: any
    setCurrentMusicDuration: any
    currentMusicTime: any
    setCurrentMusicTime: any
    currentMusicIsPlaying: any
    setCurrentMusicIsPlaying: any
    currentMusicTooglePlay: any
    setCurrentMusicTooglePlay: any
    audioRef: any
    setAudioRef: any
}

export const CurrentMusicContext = createContext<contexType | undefined>(undefined);

export function CurrentMusicContextProvider({ children }: { children: React.ReactNode }) {
    const [currentMusic, setCurrentMusic] = useState<any>(undefined);
    const [currentMusicDuration, setCurrentMusicDuration] = useState<any>(undefined);
    const [currentMusicTime, setCurrentMusicTime] = useState<any>(undefined);
    const [currentMusicIsPlaying, setCurrentMusicIsPlaying] = useState<any>(undefined);
    const [currentMusicTooglePlay, setCurrentMusicTooglePlay] = useState<any>(undefined);
    const [audioRef, setAudioRef] = useState<any>(undefined);

    return (
        <CurrentMusicContext.Provider value={{
            currentMusic,
            setCurrentMusic,
            currentMusicDuration,
            setCurrentMusicDuration,
            currentMusicTime,
            setCurrentMusicTime,
            currentMusicIsPlaying,
            setCurrentMusicIsPlaying,
            currentMusicTooglePlay,
            setCurrentMusicTooglePlay,
            audioRef,
            setAudioRef,
        }}>
            {children}
        </CurrentMusicContext.Provider>
    )
}
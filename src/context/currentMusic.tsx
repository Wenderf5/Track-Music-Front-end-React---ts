import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
import { interfaceTrack } from "../types/track";

interface ContextType {
    currentMusic: interfaceTrack | undefined;
    setCurrentMusic: Dispatch<SetStateAction<interfaceTrack | undefined>>;
    currentMusicDuration: number | undefined;
    setCurrentMusicDuration: Dispatch<SetStateAction<number | undefined>>;
    currentMusicTime: number | undefined;
    setCurrentMusicTime: Dispatch<SetStateAction<number | undefined>>;
    currentMusicIsPlaying: boolean | undefined;
    setCurrentMusicIsPlaying: Dispatch<SetStateAction<boolean | undefined>>;
    currentMusicTooglePlay: (() => void) | undefined;
    setCurrentMusicTooglePlay: Dispatch<SetStateAction<(() => void) | undefined>>;
    audioRef: React.RefObject<HTMLAudioElement> | null;
    setAudioRef: Dispatch<SetStateAction<React.RefObject<HTMLAudioElement> | null>>;
    playingTrackId: number | undefined;
    setPlayingTrackId: Dispatch<SetStateAction<number | undefined>>;
}

export const CurrentMusicContext = createContext<ContextType | undefined>(undefined);

export function CurrentMusicContextProvider({ children }: { children: ReactNode }) {
    const [currentMusic, setCurrentMusic] = useState<interfaceTrack | undefined>(undefined);
    const [currentMusicDuration, setCurrentMusicDuration] = useState<number | undefined>(undefined);
    const [currentMusicTime, setCurrentMusicTime] = useState<number | undefined>(undefined);
    const [currentMusicIsPlaying, setCurrentMusicIsPlaying] = useState<boolean | undefined>(undefined);
    const [currentMusicTooglePlay, setCurrentMusicTooglePlay] = useState<(() => void) | undefined>(undefined);
    const [audioRef, setAudioRef] = useState<React.RefObject<HTMLAudioElement> | null>(null);
    const [playingTrackId, setPlayingTrackId] = useState<number | undefined>(undefined);

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
            playingTrackId,
            setPlayingTrackId,
        }}>
            {children}
        </CurrentMusicContext.Provider>
    );
}

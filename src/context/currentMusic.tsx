import { useState, createContext, useRef } from "react";
import { interfaceMusics } from "../types/musics";

interface CurrentMusicContextProviderProps {
    currentMusic: interfaceMusics | undefined;
    setCurrentMusic: React.Dispatch<React.SetStateAction<interfaceMusics | undefined>>;
    audioRef: React.MutableRefObject<HTMLAudioElement | null>;
    PlayPause: (() => void) | undefined;
    setPlayPause: React.Dispatch<React.SetStateAction<(() => void) | undefined>>;
    isPlaying: boolean | undefined;
    setIsPlayingContext: React.Dispatch<React.SetStateAction<boolean | undefined>>;
    volume: number;
    setVolume: React.Dispatch<React.SetStateAction<number>>
    isMuted: boolean;
    setIsMuted: React.Dispatch<React.SetStateAction<boolean>>;
    duration: number;
    setDuration: React.Dispatch<React.SetStateAction<number>>;
    currentMusicTime: number;
    setCurrentMusicTime: React.Dispatch<React.SetStateAction<number>>;
}

export const CurrentMusicContext = createContext<CurrentMusicContextProviderProps | undefined>(undefined);

export function CurrentMusicContextProvider({ children }: { children: React.ReactNode }) {
    const [currentMusic, setCurrentMusic] = useState<interfaceMusics | undefined>(undefined);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [PlayPause, setPlayPause] = useState<(() => void) | undefined>(undefined);
    const [isPlaying, setIsPlayingContext] = useState<boolean | undefined>(undefined);
    const [volume, setVolume] = useState<number>(30);
    const [isMuted, setIsMuted] = useState<boolean>(false);
    const [duration, setDuration] = useState<number>(31);
    const [currentMusicTime, setCurrentMusicTime] = useState<number>(0);

    return (
        <>
            <audio ref={audioRef}></audio>
            <CurrentMusicContext.Provider value={{
                currentMusic,
                setCurrentMusic,
                audioRef,
                PlayPause,
                setPlayPause,
                isPlaying,
                setIsPlayingContext,
                volume,
                setVolume,
                isMuted,
                setIsMuted,
                duration,
                setDuration,
                currentMusicTime,
                setCurrentMusicTime
            }}>
                {children}
            </CurrentMusicContext.Provider>
        </>
    );
}
import { createContext, useState } from "react";
import { interfaceTrack } from "../types/track";

interface musicsContextInterface {
    musics: interfaceTrack[] | undefined;
    setMusics: React.Dispatch<React.SetStateAction<interfaceTrack[] | undefined>>;
}

export const MusicsContext = createContext<musicsContextInterface | undefined>(undefined);

export function MusicsContextProvider({ children }: { children: React.ReactNode }) {
    const [musics, setMusics] = useState<interfaceTrack[] | undefined>(undefined);

    return (
        <MusicsContext.Provider value={{ musics, setMusics }}>
            {children}
        </MusicsContext.Provider>
    )
}
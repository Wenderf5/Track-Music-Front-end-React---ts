import { useState, createContext } from "react";
import { interfaceMusics } from "../types/musics";

interface musicsContextInterface {
    musics: interfaceMusics[] | undefined;
    setMusics: React.Dispatch<React.SetStateAction<interfaceMusics[] | undefined>>;
}
export const MusicsContext = createContext<musicsContextInterface | undefined>(undefined);

export function MusicsContextProvider({ children }: { children: React.ReactNode }) {
    const [musics, setMusics] = useState<interfaceMusics[] | undefined>(undefined);

    return (
        <MusicsContext.Provider value={{ musics, setMusics }}>
            {children}
        </ MusicsContext.Provider>
    )
}


import { createContext, useState } from "react";

interface context {
    musics: any
    setMusics: React.Dispatch<React.SetStateAction<string>>
}

export const MusicsContext = createContext<context | undefined>(undefined);

export function MusicsContextProvider({ children }: { children: React.ReactNode }) {
    const [musics, setMusics] = useState<any>(undefined);

    return (
        <MusicsContext.Provider value={{ musics, setMusics }}>
            {children}
        </MusicsContext.Provider>
    )
}
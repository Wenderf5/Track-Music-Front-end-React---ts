import { createContext, useState } from "react";

interface context {
    valor: any
    setValor: React.Dispatch<React.SetStateAction<string>>
}

export const MusicsContext = createContext<context | undefined>(undefined);

export function ValorContext({ children }: { children: React.ReactNode }) {
    const [valor, setValor] = useState<any>(undefined);

    return (
        <MusicsContext.Provider value={{ valor, setValor }}>
            {children}
        </MusicsContext.Provider>
    )
}
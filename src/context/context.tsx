import { createContext, useState } from "react";

interface context {
    valor: string
    setValor: object
}

const Context = createContext<context | undefined>(undefined);

function ValorContext({ children }: { children: React.ReactNode }) {
    const [valor, setValor] = useState<string>("Wender Fabiano");

    return (
        <Context.Provider value={{ valor, setValor }}>
            {children}
        </Context.Provider>
    )
}

export { ValorContext, Context }
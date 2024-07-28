import { createContext, useState } from "react";

interface VolumeContextInterface {
    volumeCon: number;
    setVolumeCon: React.Dispatch<React.SetStateAction<number>>;
    volumeMutedCon: boolean;
    setVolumeMutedCon: React.Dispatch<React.SetStateAction<boolean>>;
}

export const VolumeContext = createContext<VolumeContextInterface | undefined>(undefined);

export function VolumeContextProvider({ children }: { children: React.ReactNode }) {
    const [volumeCon, setVolumeCon] = useState<number>(30);
    const [volumeMutedCon, setVolumeMutedCon] = useState<boolean>(false);

    return (
        <VolumeContext.Provider value={{ volumeCon, setVolumeCon, volumeMutedCon, setVolumeMutedCon }}>
            {children}
        </VolumeContext.Provider>
    )
}
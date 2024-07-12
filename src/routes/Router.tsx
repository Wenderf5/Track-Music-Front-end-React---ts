import { createBrowserRouter } from "react-router-dom";
import { MusicsContextProvider } from "../context/musics";
import { CurrentMusicContextProvider } from "../context/currentMusic";
import { VolumeContextProvider } from "../context/volumeContext";
import App from "../App";
import Home from "../pages/home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: (
                    <VolumeContextProvider>
                        <CurrentMusicContextProvider>
                            <MusicsContextProvider>
                                <Home />
                            </MusicsContextProvider>
                        </CurrentMusicContextProvider>
                    </VolumeContextProvider>
                )
            }
        ]
    }
])

export default router
import { createBrowserRouter } from "react-router-dom";
import { MusicsContextProvider } from "../context/musics";
import { CurrentMusicContextProvider } from "../context/currentMusic";
import { VolumeContextProvider } from "../context/volumeContext";
import App from "../App";
import Home from "../pages/home";
import Playlist from "../pages/playlist";

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
            },
            {
                path: '/playlist/:playlistID',
                element: (
                    <VolumeContextProvider>
                        <CurrentMusicContextProvider>
                            <MusicsContextProvider>
                                <Playlist />
                            </MusicsContextProvider>
                        </CurrentMusicContextProvider>
                    </VolumeContextProvider>
                )
            }
        ]
    }
])

export default router
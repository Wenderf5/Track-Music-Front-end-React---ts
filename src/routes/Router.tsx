import { createBrowserRouter } from "react-router-dom";
import { MusicsContextProvider } from "../context/musics";
import { CurrentMusicContextProvider } from "../context/currentMusic";
import { VolumeContextProvider } from "../context/volumeContext";
import { PlaylistContextProvider } from "../context/playlist";
import App from "../App";
import Home from "../pages/home";
import Playlist from "../pages/playlist";
import Artist from "../pages/artist";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: (
                    <PlaylistContextProvider>
                        <VolumeContextProvider>
                            <CurrentMusicContextProvider>
                                <MusicsContextProvider>
                                    <Home />
                                </MusicsContextProvider>
                            </CurrentMusicContextProvider>
                        </VolumeContextProvider>
                    </PlaylistContextProvider>
                )
            },
            {
                path: '/playlist/:playlistID',
                element: (
                    <PlaylistContextProvider>
                        <VolumeContextProvider>
                            <CurrentMusicContextProvider>
                                <MusicsContextProvider>
                                    <Playlist />
                                </MusicsContextProvider>
                            </CurrentMusicContextProvider>
                        </VolumeContextProvider>
                    </PlaylistContextProvider>
                )
            },
            {
                path: '/artist/:artistID',
                element: (
                    <PlaylistContextProvider>
                        <VolumeContextProvider>
                            <CurrentMusicContextProvider>
                                <MusicsContextProvider>
                                    <Artist />
                                </MusicsContextProvider>
                            </CurrentMusicContextProvider>
                        </VolumeContextProvider>
                    </PlaylistContextProvider>
                )
            }
        ]
    }
])

export default router
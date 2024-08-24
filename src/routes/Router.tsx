import { createBrowserRouter } from "react-router-dom";
import { MusicsContextProvider } from "../context/musicsContext";
import { CurrentMusicContextProvider } from "../context/currentMusic";

import { App } from "../App";
import { Home } from "../pages/Home";
import { Artist } from "../pages/Artist";
import { Playlist } from "../pages/Playlist";

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <CurrentMusicContextProvider>
                <App />
            </CurrentMusicContextProvider>
        ),
        children: [
            {
                path: '/',
                element: (
                    <CurrentMusicContextProvider>
                        <MusicsContextProvider>
                            <Home />
                        </MusicsContextProvider>
                    </CurrentMusicContextProvider>
                )
            },
            {
                path: '/artist/:id',
                element: (
                    <CurrentMusicContextProvider>
                        <MusicsContextProvider>
                            <Artist />
                        </MusicsContextProvider>
                    </CurrentMusicContextProvider>
                )
            },
            {
                path: '/playlist/:id',
                element: (
                    <CurrentMusicContextProvider>
                        <MusicsContextProvider>
                            <Playlist />
                        </MusicsContextProvider>
                    </CurrentMusicContextProvider>
                )
            }
        ]
    }
]);
import { createBrowserRouter } from "react-router-dom";
import { MusicsContextProvider } from "../context/musicsContext";
import { CurrentMusicContextProvider } from "../context/currentMusic";

import { App } from "../App";
import { Home } from "../pages/Home";

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
            }
        ]
    }
]);
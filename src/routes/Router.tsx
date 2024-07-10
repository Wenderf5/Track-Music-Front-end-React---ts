import { createBrowserRouter } from "react-router-dom";
import { ValorContext } from "../context/musics";
import { CurrentMusicContextProvider } from "../context/currentMusic";
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
                    <CurrentMusicContextProvider>
                        <ValorContext>
                            <Home />
                        </ValorContext>
                    </CurrentMusicContextProvider>
                )
            }
        ]
    }
])

export default router
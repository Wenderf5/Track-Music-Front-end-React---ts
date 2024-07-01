import { createBrowserRouter } from "react-router-dom";
import { ValorContext } from "../context/context";
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
                    <ValorContext>
                        <Home />
                    </ValorContext>
                )
            }
        ]
    }
])

export default router
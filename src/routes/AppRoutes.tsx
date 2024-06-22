import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "../pages/home";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes
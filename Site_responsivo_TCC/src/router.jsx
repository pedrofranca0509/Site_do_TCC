import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Material from "./pages/Material"
import Publico from "./pages/Publico"
import Objetivo from "./pages/Objetivo"
import Usar from "./pages/Usar"

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/material" element={<Material />} />
            <Route path="/publico" element={<Publico />} />
            <Route path="/objetivo" element={<Objetivo />} />
            <Route path="/usar" element={<Usar />} />
        </Routes>
    )
}

export default Router

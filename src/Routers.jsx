import { Route, Routes } from "react-router"
import Main from "./pages/Main"

export default function Routers() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
        </Routes>
    )
}
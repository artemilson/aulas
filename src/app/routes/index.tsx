import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { Dashboard } from "../pages"


export const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Dashboard />} />
                <Route path="*" element={<Navigate to = "/login"/>} />
            </Routes>
        </BrowserRouter>
    )
}
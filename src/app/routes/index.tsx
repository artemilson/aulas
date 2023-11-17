import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import { Dashboard, Login } from "../pages"


export const AppRoutes = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <div>
                        <h1>Seja bem-vindo</h1>
                        <a href="/login">Entre aqui</a>
                    </div>
                } />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    )
}
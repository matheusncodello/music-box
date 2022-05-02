import React from "react";
import Musicas from './pages/Musicas';
import Adicionar from './pages/Adicionar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Rotas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Musicas />}/>
                    <Route path="/adicionar" element={<Adicionar />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Rotas;
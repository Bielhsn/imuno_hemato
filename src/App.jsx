// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cursos from './pages/Cursos';
import Podcast from './pages/Podcast';
import SobreNos from './pages/SobreNos';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import Hemacias from './pages/Hemacias';

// Importando rotas

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cursos" element={<Cursos />} />
                <Route path="/Podcast" element={<Podcast />} />
                <Route path="/SobreNos" element={<SobreNos />} />
                <Route path="/login" element={<Login />} />
                <Route path="/Perfil" element={<Perfil />} />
                <Route path="/Hemacias" element={<Hemacias />} />
                {/* Adicionando rotas */}
            </Routes>
        </Router>
    );
}

export default App;

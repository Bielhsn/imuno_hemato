// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cursos from './pages/Cursos';
import CursoHemacias from './pages/curso_hemacias';
import CursoHemoterapia from './pages/curso_hemoterapia';
import CursoSerie from './pages/curso_serie';
import CursoSistemaRh from './pages/curso_sistemarh';
import CursoTransfusao from './pages/curso_transfusao';
import Combos from './pages/combos';

// Importe suas outras páginas aqui

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cursos" element={<Cursos />} />
                <Route path="/curso_hemacias" element={<CursoHemacias />} />
                <Route path="/curso_hemoterapia" element={<CursoHemoterapia />} />
                <Route path="/curso_serie" element={<CursoSerie />} />
                <Route path="/curso_sistemarh" element={<CursoSistemaRh />} />
                <Route path="/curso_transfusao" element={<CursoTransfusao />} />
                <Route path="/combos" element={<Combos />} />
                {/* Adicione suas outras rotas aqui */}
            </Routes>
        </Router>
    );
}

export default App;

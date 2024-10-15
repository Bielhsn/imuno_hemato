import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css'; // CSS específico para o Navbar

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li>
        <li className="dropdown">
          <span className="dropdown-title">Cursos</span>
          <ul className="dropdown-menu">
            <li><Link to="/src/pages/curso_hemacias.jsx">Desvendando o painel de hemácias</Link></li>
            <li><Link to="/src/pages/curso_serie.jsx">Por onde começar?</Link></li>
            <li><Link to="/src/pages/curso_hemoterapia.jsx">Dominando a hemoterapia</Link></li>
            <li><Link to="/src/pages/curso_transfusao.jsx">Minicurso transfusão em RN</Link></li>
            <li><Link to="/src/pages/curso_sistemarh.jsx">Atualização em sistema Rh</Link></li>
            <li><Link to="/src/pages/combos.jsx">Combos</Link></li>

          </ul>
        </li>
        <li><Link to="/podcast">PodCast</Link></li>
        <li><Link to="/sobre-nos">Sobre Nós</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

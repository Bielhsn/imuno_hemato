// src/pages/Cursos.jsx
import React from 'react';
import Navbar from '../components/Navbar'; // Importando a Navbar
import Footer from '../components/Footer'; // Importando o Footer
import './css/Cursos.css'; // Importando o CSS da página de Cursos
import curso_banner from '../assests/images/curso_banner.gif'
import curso_hemacias from '../assests/images/hemacias.png'
import curso_primeira_temp from '../assests/images/foto_curso_precisamos.png'

const Cursos = () => {
    return (
        <div className="cursos">
            <Navbar />
            {/* Seção do banner */}
            <section class="cursos-section_banner">
                <div class="cursos-texto">
                    <h2>Educação sem distância.</h2>
                    <p>A imuno&hemato tem como principal objetivo tornar acessível o conhecimento e a educação em imuno-hematologia e hemoterapia por todos que querem e precisam aprender.</p>
                    <button class="btn-cursos">VER CURSOS ↓</button>
                </div>
                <div class="cursos-imagem_banner">
                    <img src={curso_banner} ></img>
                </div>
                </section>
            {/* Seção dos cursos */}
                {/* Seção desvendando hemácias */}
                <section className="curso-destaque-hemacias">
                    <div className="curso-imagem-hemacias">
                        <img src={curso_hemacias} alt="Desvendando o painel de hemácias" />
                    </div>
                    <div className="curso-descricao-hemacias">
                        <h2>Desvendando o painel de hemácias.</h2>
                        <p>O curso mais direto e objetivo pra quem tem dificuldade de descobrir qual anticorpo está no painel, que parece mais uma batalha naval.</p>
                        <div className="curso-botoes-hemacias">
                        <button className="botao-inscrever-hemacias">INSCREVER-SE AGORA</button>
                        <button className="botao-saiba-mais-hemacias">SAIBA MAIS</button>
                        </div>
                    </div>
                </section>

                {/* Seção primeira temporada */}
                <section className="curso-destaque-primeira-temp">
                    <div className="curso-imagem-primeira-temp">
                        <img src={curso_primeira_temp} alt="Desvendando o painel de hemácias" />
                    </div>
                    <div className="curso-descricao-primeira-temp">
                        <h2>Desvendando o painel de hemácias.</h2>
                        <p>O curso mais direto e objetivo pra quem tem dificuldade de descobrir qual anticorpo está no painel, que parece mais uma batalha naval.</p>
                        <div className="curso-botoes-primeira-temp">
                        <button className="botao-inscrever-primeira-temp">INSCREVER-SE AGORA</button>
                        <button className="botao-saiba-mais-primeira-temp">SAIBA MAIS</button>
                        </div>
                    </div>
                </section>
            <Footer />
        </div>
    );
};

export default Cursos;

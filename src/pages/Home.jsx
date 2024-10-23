import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './css/Home.css';

// Importando as imagens
import hemacias from '../assests/images/curso_hemacias.png';
import hemoterapia from '../assests/images/hemoterapia.png';
import logo_rosa from '../assests/images/logotipo rosa.jpeg';
// Adicione outras importações de imagens conforme necessário

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />

      {/* Seção do banner existente */}
      <section className="banner-section">
        <div className="banner-content">
          <h1>Você mais próximo da bancada transfusional!</h1>
          <button className="cta" onClick={() => window.location.href = '/cursos'}>
            <span>Conheça os cursos</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </div>
      </section>

      {/* Seção de cursos adicionada */}
      <section className="cursos-section">
        <h2 className="cursos-titulo">Pra você amar ainda mais o mundo da imunologia e hematologia.</h2>
        <div className="cursos-grid">
          <div className="curso-card">
            <img src={hemacias} alt="Desvendando o painel de hemácias" />
            <div className="curso-info">
              <p>Desvendando o painel de hemácias</p>
              <button className="curso-botao">SE INSCREVA AGORA</button>
            </div>
          </div>

          <div className="curso-card">
            <img src={hemoterapia} alt="Imuno e Hemato: Preciso mesmo saber disso?" />
            <div className="curso-info">
              <p>Imuno e Hemato: Preciso mesmo saber disso?</p>
              <button className="curso-botao">SE INSCREVA AGORA</button>
            </div>
          </div>

          <div className="curso-card">
            <img src="URL_DA_IMAGEM_3" alt="Imuno e Hemato: A essência da Imuno-Hematologia" />
            <div className="curso-info">
              <p>Imuno e Hemato: A essência da Imuno-Hematologia</p>
              <button className="curso-botao">SE INSCREVA AGORA</button>
            </div>
          </div>

          <div className="curso-card">
            <img src="URL_DA_IMAGEM_4" alt="Dominando a Hemoterapia" />
            <div className="curso-info">
              <p>Dominando a Hemoterapia</p>
              <button className="curso-botao">SE INSCREVA AGORA</button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de "Quem é a imuno&hemato?" */}
      <section>
        <div className="sobre-nos-section">
          <div className="sobre-nos-texto">
            <h2>Quem é a imuno&hemato?</h2>
            <p>
              A imuno&hemato nasceu no Instagram em junho/2020, idealizada pela Thamy, biomédica, com
              experiência de 10 anos em hemoterapia, imuno-hematologia e terapia celular. Com o objetivo
              de dividir experiências e traduzir de forma leve e divertida o “cientifiquês” e o “imuno-hematologês”. Sejam bem-vindos!
            </p>
            <button className="sobre-nos-botao">Saiba mais sobre nós</button>
          </div>
          <div className="sobre-nos-logo">
            <img src={logo_rosa} alt="Logo Imuno & Hemato" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

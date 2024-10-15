import React from 'react';
import Navbar from '../components/Navbar';  // Importando o Navbar
import Footer from '../components/Footer';  // Importando o Footer
import './css/Home.css';  // Importando o CSS específico da Home

function Home() {
  return (
    <div className="home-container">
      {/* Cabeçalho */}
      <Navbar />

      {/* Bloco 1 */}
      <section className="hero">
        <div className="hero-content">
          <h1>Você mais próximo da bancada transfusional!</h1>
        </div>
        <img src="foto1.jpg" alt="Bancada transfusional" className="hero-image" />
      </section>

      {/* Bloco 2 */}
      <section className="courses">
        <h2>Pra você amar ainda mais o mundo da imunologia e hematologia.</h2>
        <div className="course-grid">
          <div className="course-item">
            <img src="foto2.jpg" alt="Curso 1" />
            <p>Desvendando o painel de hemácias</p>
          </div>
          <div className="course-item">
            <img src="foto3.jpg" alt="Curso 2" />
            <p>Imuno e hemato: por onde começar?</p>
          </div>
          <div className="course-item">
            <img src="foto4.jpg" alt="Curso 3" />
            <p>Imuno e hemato: imuno-hematologia em sua essência.</p>
          </div>
          <div className="course-item">
            <img src="foto5.jpg" alt="Curso 4" />
            <p>Imuno e hemato: para além da rotina.</p>
          </div>
        </div>
      </section>

      {/* Bloco 3 */}
      <section className="about">
        <h2>Quem é a imuno&hemato?</h2>
        <div className="about-content">
          <img src="foto6.jpg" alt="Idealizadora Thamy" className="about-image" />
          <p>
            A imuno&hemato nasceu no Instagram em junho/2020, idealizada pela Thamy, biomédica, com 
            experiência de 10 anos em hemoterapia, imuno-hematologia e terapia celular. Com o objetivo 
            de dividir experiências e traduzir de forma leve e divertida o “cientifiquês” e o “imuno-hematologês”. 
            Sejam bem-vindos!
          </p>
        </div>
      </section>

      {/* Bloco 4 */}
      <section className="shop">
        <h2>Lojinha</h2>
        <p>
          Esse espaço foi criado exclusivamente pra você que quer exibir seu amor pela imuno-hematologia 
          e hemoterapia! Venha conferir nossos produtos exclusivos. 
          <a href="https://imunoehemato.mercadoshops.com.br/" target="_blank" rel="noopener noreferrer">
            Confira nossa loja
          </a>.
        </p>
      </section>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}

export default Home;

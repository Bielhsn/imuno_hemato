import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./css/Sobre.css";
import logo_rosa from '../assests/images/logotipo_preto.png';

const SobreNos = () => {
  return (
    <div className="sobre-nos">
      <Navbar />
      {/* Sobre mim */}
        <section className="banner-section-sobre">
          <div className="banner-content-sobre">
          <h1>Thamy Caroline de Souza Silva</h1>
          <p>
            Sou biomédica, Mestra e Doutora em Ciências da Saúde pela UNIFESP, com especialização em imuno-hematologia. Atualmente, sou professora na pós-graduação em Hematologia e Hemoterapia no Centro Universitário São Camilo – SP e idealizadora da IMUNO&HEMATO, a maior página de imuno-hematologia no Instagram, que agora também atua como consultoria e educação em hemoterapia.  

            Desde 2012, dedico-me à hemoterapia, acumulando ampla experiência no ciclo do sangue, terapia celular e, especialmente, imuno-hematologia, minha verdadeira paixão. Minhas dissertações sobre o sistema Rh me renderam os títulos de Mestra e Doutora, além de publicações de destaque em revistas como *Blood Transfusion* (2020) e *Immunohematology* (2023). Como coautora, também publiquei na *Vox Sanguinis* e *Journal of Clinical Laboratory Analysis* (2018 e 2019).  

            Meu trabalho foi reconhecido em importantes congressos da área, com o 1º lugar no prêmio de melhor trabalho em Hemoterapia no Congresso HEMORIO 2024 e destaque entre os 10 melhores trabalhos no Congresso HEMO 2023.  

            Minha missão é transformar o universo da imuno-hematologia por meio da educação e da ciência.            
          </p>
          <button className="cta-sobre" onClick={() => window.location.href = 'http://lattes.cnpq.br/6895906608002328'}>
            <span>Ver Currículo</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
          </div>
          <div class="image-container"></div>
        </section>
        {/* Como tudo começou */}
        {/* Seção de "Quem é a imuno&hemato?" */}
      <section>
        <div className="como-comecou-section">
          <div className="como-comecou-texto">
            <h2>Quem é a imuno&hemato?</h2>
            <p>
            A imuno&hemato nasceu no instagram em junho/2020, idealizada pela Thamy, biomédica, mestra e doutora pela UNIFESP e especialista em imuno-hematologia. Com o objetivo de dividir experiências e traduzir de forma leve e divertida o “cientifiquês” e o “imuno-hematologuês”.        
            </p>
            <p className="welcome">
            Sejam bem-vindos!
            </p>
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

export default SobreNos;

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
          <h1>Thamy Caroline da Silva</h1>
          <p>
          31 anos, biomédica com especialização em imuno-hematologia pela ABHH e vestibulanda de medicina. Com 10 anos de experiência em banco de sangue e terapia celular, possui mestrado pela UNIFESP, com publicações importantes na área. Atualmente, desenvolve pesquisa sobre o sistema Rh na UNIFESP e Fundação Pró Sangue, em busca do título de doutora. Também leciona imuno-hematologia na pós-graduação da Universidade São Camilo. Apaixonada por educação e ciência, acredita na transformação do mundo por meio do conhecimento.          
          </p>
          <button className="cta" onClick={() => window.location.href = '/cursos'}>
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
            A imuno&hemato nasceu no Instagram em junho de 2020, idealizada por Thamy, uma biomédica com 10 anos de experiência em hemoterapia, imuno-hematologia e terapia celular. O projeto surgiu com o propósito de compartilhar conhecimentos e traduzir, de forma leve e divertida, o “cientifiquês” e o “imuno-hematologês”.
            Desde o início, percebi as dificuldades básicas que eu e meus colegas enfrentávamos, além das diferentes formas que cada pessoa tem de aprender. Assim, decidi criar a página no Instagram para transmitir a imuno-hematologia de maneira objetiva, prática e acessível, quebrando barreiras e conectando pessoas de diferentes regiões do Brasil e do mundo.
            Com o apoio de amigos e profissionais da área, a imuno&hemato tem como missão acolher, inspirar e fazer você se sentir parte dessa comunidade. De forma simples e acessível, estaremos ao seu lado em novas jornadas a partir de agora.
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

// src/pages/Cursos.jsx
import React from "react";
import Navbar from "../components/Navbar"; // Importando a Navbar
import Footer from "../components/Footer"; // Importando o Footer
import "./css/Cursos.css"; // Importando o CSS da página de Cursos
import curso_banner from "../assests/images/curso_banner.gif";
import curso_hemacias from "../assests/images/curso_hemacias.png";
import curso_primeira_temp from "../assests/images/foto_curso_precisamos.png";
import curso_segunda_temp from "../assests/images/foto_curso_temp2.png";
import curso_terceira_temp from "../assests/images/rn.png";
import curso_rh from "../assests/images/rh.png";
import curso_genotipagem from "../assests/images/hemoterapia_curso.jpg";

const Cursos = () => {
  return (
    <div className="cursos">
      <Navbar />
      {/* Seção do banner */}
      <section class="cursos-section_banner container">
        <div class="cursos-texto">
          <h2>Educação sem distância.</h2>
          <p>
            A imuno&hemato tem como principal objetivo tornar acessível o
            conhecimento e a educação em imuno-hematologia e hemoterapia por
            todos que querem e precisam aprender.
          </p>
        </div>
        <div class="cursos-imagem_banner">
          <img src={curso_banner}  className="img_banner_cursos" alt="Cursos"></img>
        </div>
      </section>
      {/* Seção dos cursos */}

      {/* Seção desvendando hemácias */}
      <section className="cursos-destaques container">
        <div className="card-hemacias">
          <div className="card-details-hemacias" id= "card-480">
            <img src={curso_hemacias} className="img" alt="Curso Hemácias" id= "img-480" />
            <div className="text-container-hemacias">
            </div>
          </div>
          <a href="https://hotmart.com/pt-br/marketplace/produtos/desvendando-o-painel-de-hemacias/B48662820F">
            <button className="card-button">Inscreva-se agora!</button>
          </a>
        </div>

        {/* Seção primeira temporada */}
        <div className="card-primeira">
          <div className="card-details-primeira">
            <img
              src={curso_primeira_temp}
              className="img"
              alt="Primeira temporada"
            />
            <div className="text-container-primeira">
            </div>
          </div>
          <a href="https://hotmart.com/pt-br/marketplace/produtos/serie-imuno-e-hemato-1atemporada/S80660889W">
            <button className="card-button">Inscreva-se agora!</button>
          </a>
        </div>

        {/* Seção segunda temporada */}
        <div className="card-segunda">
          <div className="card-details-segunda">
            <img
              src={curso_segunda_temp}
              className="img-segunda"
              alt="Curso Hemácias"
            />
            <div className="text-container-segunda">
            </div>
          </div>
          <a href="https://hotmart.com/pt-br/marketplace/produtos/serie-imuno-e-hemato-2a-temporada/G85816407E">
            <button className="card-button">Inscreva-se agora!</button>
          </a>
        </div>
      </section>

      <section className="cursos-destaques container">
        {/* Seção Transfusão em recém-nascidos e pediatria */}
        <div className="card-hemacias">
          <div className="card-details-hemacias">
            <img
              src={curso_terceira_temp}
              className="img"
              alt="Curso Hemácias"
            />
            <div className="text-container-hemacias">
            </div>
          </div>
          <a href="https://hotmart.com/pt-br/marketplace/produtos/transfusao-em-recem-nascidos-e-pediatria/G96358968W">
            <button className="card-button">Inscreva-se agora!</button>
          </a>
        </div>

        {/* Seção Atualização em sistema Rh */}
        <div className="card-primeira">
          <div className="card-details-primeira">
            <img src={curso_rh} className="img-rh" alt="Primeira temporada" />
            <div className="text-container-primeira">
            </div>
          </div>
          <a href="https://pay.hotmart.com/B48662820F?checkoutMode=10">
            <button className="card-button">Inscreva-se agora!</button>
          </a>
        </div>

        {/* Seção Dominando a Hemoterapia */}
        <div className="card-segunda" id="card-dominando">
          <div className="card-details-segunda">
            <img src={curso_genotipagem} className="img-dominando" alt="Curso Hemácias" />
            <div className="text-container-segunda">
            </div>
          </div>
          <a href="https://hotmart.com/pt-br/marketplace/produtos/dominando-a-hemoterapia/Y92002606B">
            <button className="card-button">Inscreva-se agora!</button>
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Cursos;

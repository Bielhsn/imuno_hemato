// src/pages/Cursos.jsx
import React from "react";
import Navbar from "../components/Navbar"; // Importando a Navbar
import Footer from "../components/Footer"; // Importando o Footer
import "./css/Cursos.css"; // Importando o CSS da página de Cursos
import curso_banner from "../assests/images/curso_banner.gif";
import curso_hemacias from "../assests/images/hemacias.gif";
import curso_primeira_temp from "../assests/images/primeira_temp.gif";
import curso_segunda_temp from "../assests/images/segunda_temp.gif";
import curso_terceira_temp from "../assests/images/terceira_temp.gif";
import curso_rh from "../assests/images/rh.gif";
import curso_genotipagem from "../assests/images/genotipagem.gif";

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
          <img src={curso_banner} alt="Cursos"></img>
        </div>
      </section>
      {/* Seção dos cursos */}

      {/* Seção desvendando hemácias */}
      <section className="cursos-destaques container">
        <div className="card-hemacias">
          <div className="card-details-hemacias">
            <img src={curso_hemacias} className="img" alt="Curso Hemácias" />
            <div className="text-container-hemacias">
              <p className="text-title-hemacias">
                Desvendando o painel de hemácias
              </p>
              <p className="text-body-hemacias">
                O curso mais direto e objetivo pra quem tem dificuldade de
                descobrir qual anticorpo está no painel, que parece mais uma
                batalha naval.
              </p>
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
              <p className="text-title-primeira">
                {" "}
                Imuno e hemato: Por onde começar?
              </p>
              <p className="text-body-primeira">
                Esse curso vai te levar para os primórdios da imunologia e
                hematologia e te mostrar quanto é importante você saber disso
                pra estar na bancada.
              </p>
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
              <p className="text-title-segunda">
                Imuno e hemato: imuno-hematologia em sua essência.{" "}
              </p>
              <p className="text-body-segunda">
                Aqui você vai saber da essência da imuno-hemato. Vamos aprender
                juntos os principais conceitos de grupos sanguíneos, significado
                clínico dos anticorpos, técnicas dos testes pré-transfusionais e
                muito mais.
              </p>
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
              <p className="text-title-hemacias">
                Transfusão em recém-nascidos e pediatria.
              </p>
              <p className="text-body-hemacias">
                Ideal para profissionais que desejam aprofundar seus
                conhecimentos sobre transfusão de sangue em neonatos e
                pediatria, abordando tópicos essenciais e específicos para esse
                público.
              </p>
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
              <p className="text-title-primeira"> Atualização em sistema Rh.</p>
              <p className="text-body-primeira">
                Aqui você vai conhecer bem mais sobre esse sistema que tem tanta
                particularidade que só mesmo quem estuda ele exclusivamente pode
                te contar! De forma leve e objetiva, você vai desmistificar a
                complexidade do Rh.
              </p>
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
              <p className="text-title-segunda">
                Dominando a Hemoterapia: Fundamentos e práticas na enfermagem.{" "}
              </p>
              <p className="text-body-segunda">
                O curso aborda hemoterapia aplicada aos cuidados assistenciais,
                desde a coleta até a transfusão, destacando etapas técnicas e
                essenciais do processo transfusional. É indicado para
                profissionais técnicos que desejam entender a assistência e
                vice-versa, unindo enfermagem e técnicos de bancada.
              </p>
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

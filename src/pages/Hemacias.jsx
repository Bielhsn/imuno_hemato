import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./css/Hemacias.css";
import hemacias_banner from '../assests/images/hemacias_perfil.gif';

const Hemacias = () => {
  const videoId = "Z1ZOn5BPIjE"; // Substitua pelo ID do vídeo individual

  return (
    <div className="hemacias">
      <Navbar />
      {/* Seção do banner */}
      <section className="hemacias-section_banner">
        <div className="hemacias-texto">
          <h2>Bem-Vindo ao curso.</h2>
          <p>
            A imuno&hemato tem como principal objetivo tornar acessível o
            conhecimento e a educação em imuno-hematologia e hemoterapia por
            todos que querem e precisam aprender.
          </p>
        </div>
        <div className="hemacias-imagem_banner">
          <img src={hemacias_banner} alt="hemacias" />
        </div>
      </section>

      {/* Vídeo principal */}
      <section className="hemacia-section">
        <div className="video-principal">
          <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <h3>Desvendando o Painel de Hemácias</h3>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Hemacias;

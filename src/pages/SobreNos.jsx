import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./css/Sobre.css";

const SobreNos = () => {
  return (
    <div className="sobre-nos">
      <Navbar />
      <div className="whatsapp-link">
        <a href="https://wa.me/seuNumero" target="_blank" rel="noopener noreferrer">
          <img src="icone-whatsapp.png" alt="WhatsApp" />
        </a>
      </div>
      <main className="content">
        <section className="profile">
          <img
            src="url_da_sua_imagem.jpg"
            alt="Sua foto"
            className="profile-image"
          />
          <h1>Seu Nome</h1>
          <p>
            Breve descrição sobre você, sua experiência e o que deseja compartilhar com os visitantes.
          </p>
          <button>
            <a href="link_para_curriculo_lattes" target="_blank" rel="noopener noreferrer">
              Ver Currículo Lattes
            </a>
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SobreNos;

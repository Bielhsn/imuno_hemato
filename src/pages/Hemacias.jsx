import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./css/Hemacias.css";
import hemacias_banner from "../assests/images/hemacias_perfil.gif";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-youtube";

const Hemacias = () => {
  const videoNode = useRef(null); // Referência ao elemento de vídeo
  const playerRef = useRef(null); // Referência ao player do Video.js

  const videos = [
    {
      id: "Z1ZOn5BPIjE",
      title: "Desvendando o Painel de Hemácias",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "Técnicas Avançadas em Hemoterapia",
    },
    {
      id: "eYq7WapuDLU",
      title: "Práticas Clínicas de Imuno-Hematologia",
    },
  ];

  const [selectedVideo, setSelectedVideo] = useState(videos[0]); // Estado para o vídeo principal

  useEffect(() => {
    // Verifica se o elemento <video> está disponível no DOM
    if (!videoNode.current) {
      console.warn("O elemento <video> ainda não está disponível no DOM.");
      return;
    }

    // Remove instâncias antigas do player para evitar duplicação
    if (playerRef.current) {
      playerRef.current.dispose();
    }

    // Inicializa o Video.js com o vídeo atual
    playerRef.current = videojs(videoNode.current, {
      techOrder: ["youtube"], // Prioriza o YouTube como tecnologia
      autoplay: false,
      controls: true,
      responsive: true,
      fluid: true,
      sources: [
        {
          src: `https://www.youtube.com/watch?v=${selectedVideo.id}`,
          type: "video/youtube",
        },
      ],
      youtube: {
        modestbranding: 1, // Remove o logo do YouTube
        rel: 0, // Desativa vídeos relacionados
        showinfo: 0, // Remove informações do vídeo
        disablekb: 1, // Desativa teclado do YouTube
      },
    });

    // Log de inicialização
    console.log("Player Video.js inicializado com sucesso.");

    // Listener para erros
    playerRef.current.on("error", () => {
      console.error("Erro ao carregar o vídeo.");
    });

    return () => {
      // Remove o player ao desmontar
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    };
  }, [selectedVideo]);

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
          <div data-vjs-player>
            <video
              ref={videoNode}
              className="video-js vjs-default-skin"
              controls
              preload="auto"
              width="100%"
              height="500"
            ></video>
          </div>
          <h3>{selectedVideo.title}</h3>
        </div>

        {/* Lista de vídeos */}
        <div className="video-lista">
          {videos.map((video, index) => (
            <div
              key={index}
              className={`video-item ${
                selectedVideo.id === video.id ? "active" : ""
              }`}
              onClick={() => setSelectedVideo(video)} // Atualiza o vídeo principal
            >
              <p>{video.title}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Hemacias;
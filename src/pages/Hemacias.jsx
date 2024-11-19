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
    const initializePlayer = () => {
      if (videoNode.current) {
        // Remove qualquer instância existente
        if (playerRef.current) {
          playerRef.current.dispose();
        }

        // Inicializar o Video.js
        playerRef.current = videojs(videoNode.current, {
          techOrder: ["youtube"],
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
            rel: 0, // Remove vídeos relacionados
            showinfo: 0, // Remove informações do vídeo
            disablekb: 1, // Desativa o teclado do YouTube
            iv_load_policy: 3, // Remove anotações
            fs: 0, // Remove botão de fullscreen nativo do YouTube
          },
        });

        playerRef.current.on("error", () => {
          console.error("Erro ao carregar o vídeo.");
        });
      } else {
        console.warn("O elemento <video> ainda não está presente no DOM.");
      }
    };

    // Aguardar a próxima renderização para garantir que o DOM está pronto
    const timeout = setTimeout(initializePlayer, 0);

    return () => {
      clearTimeout(timeout);
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
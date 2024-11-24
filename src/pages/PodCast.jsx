import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./css/Podcast.css";
import podcast_banner from "../assests/images/Podcast.gif";
import spotify_logo from "../assests/images/spotify_logo.png";
import apple_podcasts from "../assests/images/apple_logo.png";

// Variáveis de ambiente
const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

const Podcast = () => {
  const [episodes, setEpisodes] = useState([]);
  const [currentEpisode, setCurrentEpisode] = useState(null);
  const [accessToken, setAccessToken] = useState("");

  // Função para obter o token de acesso
  const fetchAccessToken = async () => {
    try {
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
        },
        body: "grant_type=client_credentials",
      });
      const data = await response.json();
      setAccessToken(data.access_token);
    } catch (error) {
      console.error("Erro ao obter Access Token:", error);
    }
  };

  // Função para buscar os episódios do podcast
  const fetchEpisodes = async () => {
    if (!accessToken) return;
    try {
      const response = await fetch(
        "https://api.spotify.com/v1/shows/5YYAiPc6zKHx8RbuqGNev2/episodes",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = await response.json();
      const formattedEpisodes = data.items.map((episode) => ({
        id: episode.id,
        title: episode.name,
        date: new Date(episode.release_date).toLocaleDateString("pt-BR"),
        embedUrl: `https://open.spotify.com/embed/episode/${episode.id}`,
        imageUrl: episode.images[0]?.url || "",
      }));
      setEpisodes(formattedEpisodes);
      setCurrentEpisode(formattedEpisodes[0]); // Define o primeiro episódio como principal
    } catch (error) {
      console.error("Erro ao buscar episódios:", error);
    }
  };

  // Efeito para carregar o token ao montar o componente
  useEffect(() => {
    fetchAccessToken();
  }, []);

  // Efeito para buscar episódios quando o token é carregado
  useEffect(() => {
    if (accessToken) fetchEpisodes();
  }, [accessToken]);

  const handleEpisodeClick = (episode) => {
    setCurrentEpisode(episode);
  };

  return (
    <>
      <Navbar />
      <div className="podcast-container">
        {/* Seção do banner */}
        <section className="podcast-section_banner">
          <div className="podcast-texto">
            <h2>O ABOcast é o podcast oficial da imuno&amp;hemato</h2>
            <p>
              Thamy e Bruno discutem temas de banco de sangue com convidados,
              trazendo ciência e leveza à imuno-hematologia mensalmente.
            </p>
            <h3 className="podcast-subtitle">Ouça agora</h3>
            <div className="podcast-buttons">
              <a
                href="https://open.spotify.com/show/5YYAiPc6zKHx8RbuqGNev2"
                target="_blank"
                rel="noopener noreferrer"
                className="podcast-btn spotify-btn"
              >
                <img src={spotify_logo} alt="Spotify" />
                Spotify
              </a>
              <a
                href="https://podcasts.apple.com/us/podcast/abocast/id1609996362"
                target="_blank"
                rel="noopener noreferrer"
                className="podcast-btn apple-btn"
              >
                <img src={apple_podcasts} alt="Apple Podcasts" />
                Apple Podcasts
              </a>
            </div>
          </div>
          <div className="podcast-imagem_banner">
            <img src={podcast_banner} alt="Podcast" />
          </div>
        </section>

        {/* Card de episódios */}
        <section className="podcast-episodes-section">
          <div className="podcast-card">
            {/* Principal episódio */}
            {currentEpisode && (
              <div className="main-episode dynamic-player">
                <h2>{currentEpisode.title}</h2>
                <p>{currentEpisode.date}</p>
                <div className="spotify-player">
                  <iframe
                    key={currentEpisode.id}
                    style={{ borderRadius: "12px" }}
                    src={currentEpisode.embedUrl}
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title={`Spotify Player - ${currentEpisode.title}`}
                  ></iframe>
                </div>
              </div>
            )}

            {/* Lista de episódios anteriores */}
            <div className="episode-list">
              <h3>Outros episódios</h3>
              <ul>
                {episodes
                  .filter((episode) => episode.id !== currentEpisode?.id)
                  .map((episode) => (
                    <li key={episode.id} className="episode-item">
                      <button
                        onClick={() => handleEpisodeClick(episode)}
                        className="episode-button"
                      >
                        <img
                          src={episode.imageUrl}
                          alt={episode.title}
                          className="episode-image"
                        />
                        <span>
                          {episode.title} - {episode.date}
                        </span>
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Podcast;

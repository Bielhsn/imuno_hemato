import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./css/Home.css";

// Importando as imagens
import hemacias from "../assests/images/curso_hemacias.png";
import primeira_temp from "../assests/images/foto_curso_precisamos.png";
import segunda_temp from "../assests/images/foto_curso_temp2.png";
import hemoterapia from "../assests/images/hemoterapia_curso.jpg";
import logo_rosa from "../assests/images/logotipo_preto.png";
import home_banner from "../assests/images/home_banner.gif";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />

      {/* Seção do banner */}
      <section className="banner-section">
        <div className="banner-content">
          <h1>Você mais próximo da bancada transfusional!</h1>
        </div>
        <div class="cursos-imagem_banner">
          <img src={home_banner} alt="Cursos"></img>
        </div>
      </section>

      {/* Seção de cursos */}
      <section className="cursos-section">
        <h2 className="cursos-titulo">
          Pra você amar ainda mais o mundo da imunologia e hematologia.
        </h2>
        <div className="cursos-grid">
          <div className="curso-card">
            <img src={hemacias} alt="Desvendando o painel de hemácias" />
            <div className="curso-info">
              <p>Desvendando o painel de hemácias</p>
              <a href="https://hotmart.com/pt-br/marketplace/produtos/desvendando-o-painel-de-hemacias/B48662820F">
                <button className="curso-botao">SE INSCREVA AGORA</button>
              </a>
            </div>
          </div>
          <div className="curso-card">
            <img
              src={primeira_temp}
              alt="Imuno e Hemato: Preciso mesmo saber disso?"
            />
            <div className="curso-info">
              <p>Preciso mesmo saber disso?</p>
              <a href="https://hotmart.com/pt-br/marketplace/produtos/serie-imuno-e-hemato-1atemporada/S80660889W">
                <button className="curso-botao">SE INSCREVA AGORA</button>
              </a>
            </div>
          </div>

          <div className="curso-card" id="curso-card-2">
            <img
              src={segunda_temp}
              alt="Imuno e Hemato: A essência da Imuno-Hematologia"
            />
            <div className="curso-info">
              <p id="curso-info-text-essencia">
                A essência da Imuno-Hematologia
              </p>
              <a href="https://hotmart.com/pt-br/marketplace/produtos/serie-imuno-e-hemato-2a-temporada/G85816407E">
                <button className="curso-botao">SE INSCREVA AGORA</button>
              </a>
            </div>
          </div>

          <div className="curso-card" id="curso-card-2">
            <img src={hemoterapia} alt="Dominando a Hemoterapia" />
            <div className="curso-info">
              <p>Dominando a Hemoterapia</p>
              <a href="https://hotmart.com/pt-br/marketplace/produtos/dominando-a-hemoterapia/Y92002606B">
                <button className="curso-botao">SE INSCREVA AGORA</button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de "Quem é a imuno&hemato?" */}
      <section>
        <div className="sobre-nos-section">
          <div className="sobre-nos-texto">
            <h2>Quem é a imuno&hemato?</h2>
            <p>
              A imuno&hemato nasceu no Instagram em junho/2020, idealizada pela
              Thamy, biomédica, com experiência de 10 anos em hemoterapia,
              imuno-hematologia e terapia celular. Com o objetivo de dividir
              experiências e traduzir de forma leve e divertida o “cientifiquês”
              e o “imuno-hematologês”. Sejam bem-vindos!
            </p>
            <a href="/SobreNos">
              <button className="sobre-nos-botao">Saiba mais sobre nós</button>
            </a>
          </div>
          <div className="sobre-nos-logo">
            <img src={logo_rosa} alt="Logo Imuno & Hemato" />
          </div>
        </div>
      </section>

      {/* Seção de "Faça parte?" */}
      <section className="community-section">
        <div className="community-info">
          <h2>Faça parte da nossa comunidade!</h2>
          <p>
            Aquela que não vai te abandonar no fim de plantão da sexta-feira.
            Estamos com você!
          </p>

          <ul class="example-2">
            {/* Whatsapp */}
            <li class="icon-content">
              <a
                data-social="whatsapp"
                aria-label="Whatsapp"
                href="https://chat.whatsapp.com/DT4rbF72DqpGhsogiSAKwH"
              >
                <div class="filled"></div>
                <svg class="socialSvg whatsappSvg" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                </svg>
              </a>
              <div class="tooltip">Whatsapp</div>
            </li>
            {/* Facebook */}
            <li class="icon-content">
              <a
                data-social="facebook"
                aria-label="Facebook"
                href="https://www.facebook.com/imunoehemato/"
              >
                <div class="filled"></div>
                <svg
                  viewBox="0 0 320 512"
                  height="1.2em"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                </svg>
              </a>
              <div class="tooltip">Facebook</div>
            </li>
            {/* Instagram */}
            <li class="icon-content">
              <a
                data-social="instagram"
                aria-label="instagram"
                href="https://www.instagram.com/imunoehemato/"
              >
                <div class="filled"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.2em"
                  fill="currentColor"
                  class="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                </svg>
              </a>
              <div class="tooltip">Instagram</div>
            </li>
            {/* Linkedin */}
            <li class="icon-content">
              <a
                data-social="linkedin"
                aria-label="linkedin"
                href="https://www.linkedin.com/company/imuno-hemato/posts/?feedView=all"
              >
                <div class="filled"></div>
                <svg
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                </svg>
              </a>
              <div class="tooltip">Linkedin</div>
            </li>
            {/* Spotify */}
            <li class="icon-content">
              <a
                data-social="spotify"
                aria-label="Spotify"
                href="https://open.spotify.com/show/5YYAiPc6zKHx8RbuqGNev2"
              >
                <div class="filled"></div>
                <svg viewBox="0 0 100 100" version="1.1">
                  <path
                    fill="currentColor"
                    d="M50,4C24.7,4,4,24.7,4,50s20.6,46,46,46s46-20.6,46-46S75.4,4,50,4z M71.6,71.5c0,0,0,0.1-0.1,0.1c-0.8,1.2-2,1.8-3.2,1.8  c-0.7,0-1.4-0.2-2-0.6c-10.2-6.3-23.3-7.7-38.8-4.1c-2.1,0.6-4-0.9-4.5-2.7c-0.6-2.3,0.9-4.1,2.7-4.6c17.7-4,32.6-2.3,44.4,5  c0.9,0.4,1.5,1,1.8,1.9C72.2,69.3,72.1,70.5,71.6,71.5z M76.9,59.3L76.9,59.3c-0.8,1.1-1.9,1.9-3.2,2.1c-0.2,0-0.5,0.1-0.7,0.1  c-0.8,0-1.6-0.3-2.3-0.7c-12-7.3-30.1-9.4-43.9-5c-2.5,0.6-5-0.7-5.6-3c-0.6-2.5,0.7-4.9,3-5.5c16.5-5,37.2-2.5,51.4,6.2  c0.8,0.4,1.5,1.3,1.8,2.5C77.9,57,77.6,58.3,76.9,59.3z M83.2,45.6c-1,1.4-2.7,2.1-4.4,2.1c-0.9,0-1.9-0.2-2.7-0.7c0,0,0,0,0,0  c-13.9-8.3-37.8-9.3-51.4-5.1c-2.7,0.8-5.5-0.7-6.4-3.3c-0.8-2.7,0.7-5.6,3.3-6.4c16.2-4.8,43-3.8,59.8,6.2  C83.8,39.6,84.7,42.9,83.2,45.6C83.3,45.5,83.3,45.5,83.2,45.6z"
                  ></path>
                </svg>
              </a>
              <div class="tooltip">Spotify</div>
            </li>
          </ul>
        </div>
        <div class="card">
          <div class="bg">
            <h2>Dúvidas?</h2>
            <p>
              {" "}
              Fale conosco em:
              <a
                data-social="instagram"
                aria-label="instagram"
                href="mailto:contato@imunoehemato.com.br?subject=Assunto%20do%20Email&body=Olá,%20estou%20com%20algumas%20dúvidas%20."
              >
                <div class="filled"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#f14336"
                  viewBox="0 0 24 24"
                  height="24"
                  class="gmail"
                  width="24"
                >
                  <path d="M6 12C6 15.3137 8.68629 18 12 18C14.6124 18 16.8349 16.3304 17.6586 14H12V10H21.8047V14H21.8C20.8734 18.5645 16.8379 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.445 2 18.4831 3.742 20.2815 6.39318L17.0039 8.68815C15.9296 7.06812 14.0895 6 12 6C8.68629 6 6 8.68629 6 12Z"></path>
                </svg>
              </a>
              <a
                data-social="instagram"
                aria-label="instagram"
                href="https://www.instagram.com/imunoehemato/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1.2em"
                  fill="#e4405f"
                  class="bi bi-instagram"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                </svg>
              </a>
            </p>
          </div>
          <div class="blob"></div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;

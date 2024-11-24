import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";
import logo from "../assests/images/imuno_hemato-logo.png";

const Navbar = ({ userLoggedIn, setUserLoggedIn }) => {
  const isLoggedIn = !!localStorage.getItem("token"); // Verifica se há token no localStorage

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove o token no logout
    window.location.reload(); // Atualiza a página após o logout
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/cursos">Cursos</Link>
        <Link to="/Podcast">ABOcast</Link>
        <Link to="/SobreNos">Sobre</Link>
        <Link to="https://sso.hotmart.com/login?service=https%3A%2F%2Fsso.hotmart.com%2Foauth2.0%2FcallbackAuthorize%3Fclient_id%3Db432cdd3-eb60-46bd-892b-5b450a65153e%26redirect_uri%3Dhttps%253A%252F%252Fhotmart.com%252Fen%252Fclub%252Fmartell%252Fauth%252Flogin%26response_type%3Dcode%26response_mode%3Dquery%26client_name%3DCasOAuthClient">
          Login
        </Link>
      </div>

      {/* {isLoggedIn ? (
              <>
                    <label className="popup">
        <input type="checkbox" />
        <div tabindex="0" className="burger">
          <svg
            viewBox="0 0 24 24"
            fill="white"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z"
            ></path>
          </svg>
        </div>
              <nav className="popup-window">
              <ul>
                <div className="navbar-profile">
                  <li>
                    <button>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.2"
                        stroke-linecap="round"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 4v6.406l-3.753 3.741-6.463-6.462 3.7-3.685h6.516zm2-2h-12.388l1.497 1.5-4.171 4.167 9.291 9.291 4.161-4.193 1.61 1.623v-12.388zm-5 4c.552 0 1 .449 1 1s-.448 1-1 1-1-.449-1-1 .448-1 1-1zm0-1c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm6.708.292l-.708.708v3.097l2-2.065-1.292-1.74zm-12.675 9.294l-1.414 1.414h-2.619v2h-2v2h-2v-2.17l5.636-5.626-1.417-1.407-6.219 6.203v5h6v-2h2v-2h2l1.729-1.729-1.696-1.685z"
                        ></path>
                      </svg>
                      <Link to="/Perfil">Perfil</Link>
                    </button>
                  </li>
                </div>
                <div className="navbar-profile-sair">
                  <li>
                    <button>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1"
                        stroke-linecap="round"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.598 9h-1.055c1.482-4.638 5.83-8 10.957-8 6.347 0 11.5 5.153 11.5 11.5s-5.153 11.5-11.5 11.5c-5.127 0-9.475-3.362-10.957-8h1.055c1.443 4.076 5.334 7 9.902 7 5.795 0 10.5-4.705 10.5-10.5s-4.705-10.5-10.5-10.5c-4.568 0-8.459 2.923-9.902 7zm12.228 3l-4.604-3.747.666-.753 6.112 5-6.101 5-.679-.737 4.608-3.763h-14.828v-1h14.826z"
                        ></path>
                      </svg>
                      <Link to="/" onClick={handleLogout}>Sair</Link>
                    </button>
                  </li>
                </div>
                </ul>
              </nav>
              </label>
              </>
            ) : (
              <div className="navbar-profile-login">
                <Link to="/login">Login</Link>
              </div>
            )} */}

      <ul class="example-1">
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
      </ul>
    </nav>
  );
};

export default Navbar;

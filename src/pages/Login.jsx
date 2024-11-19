import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Login.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Login = ({ setUserLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/login', { username, password });
      localStorage.setItem('token', response.data.token);
      navigate('/');
    } catch (error) {
      console.error('Erro ao tentar fazer login:', error);
      alert('Usuário ou senha incorretos');
    }
  };

  return (
    <div className="login-container">
      <Navbar />
      <section className="login-section">
        <div className="content-left">
          <div className="banner-content-login">
            <h1>Entre em sua conta e acesse seus cursos exclusivos!</h1>
            <h3>Em parceria com Martell</h3>
          </div>
          <div className="login-box">
            <p>Login</p>
            <form onSubmit={handleSubmit}>
              <div className="user-box">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Nome de Usuário"
                />
              </div>
              <div className="user-box">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Senha"
                />
              </div>
              <button type="submit" className="button-login">Entrar</button>
            </form>
          </div>
        </div>
      </section>
      <Footer className="footer" />
    </div>
  );
};

export default Login;
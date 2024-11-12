import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Login.css';

const Login = ({ setUserLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Impede o comportamento padrão de recarregar a página
    try {
      const response = await axios.post('http://localhost:5000/api/login', { username, password });
      localStorage.setItem('token', response.data.token); // Armazena o token
      navigate('/home'); // Redireciona para a página inicial
    } catch (error) {
      alert('Usuário ou senha incorretos');
    }
  };

  return (
    <div className="login-box">
      <p>Login</p>
      <form onSubmit={handleSubmit}> {/* Substituí o onSubmit para chamar handleSubmit */}
        <div className="user-box">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Nome de Usuário"
          />
          <label>Usuário</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
          />
          <label>Password</label>
        </div>
        <button type="submit">Login</button> {/* Não é mais necessário o onClick */}
      </form>
    </div>
  );
};

export default Login;
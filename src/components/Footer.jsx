import React from 'react';
import './css/Footer.css'; // CSS específico para o Footer

function Footer() {
  return (
    <footer className="footer">
      <h3>Faça parte da nossa comunidade!</h3>
      <p>Aquela que não vai te abandonar no fim do plantão</p>
      <div className="social-links">
        <a href="https://www.instagram.com/imunoehemato/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.facebook.com/imunoehemato" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.linkedin.com/company/imuno-hemato" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="http://t.me/imunoehemato" target="_blank" rel="noopener noreferrer">Telegram</a>
        <a href="https://anchor.fm/imunoehemato" target="_blank" rel="noopener noreferrer">
          <img src="spotify-icon.png" alt="Spotify Podcast" className="spotify-icon" />
        </a>
      </div>
      <p>
        Dúvidas? Fale com a gente em <a href="mailto:contato@imunoehemato.com.br">contato@imunoehemato.com.br</a> 
        ou mande uma direct no Instagram, a gente também responde por lá!
      </p>
    </footer>
  );
}

export default Footer;

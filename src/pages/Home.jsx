import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './css/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <section className="banner-section">
        <div className="banner-content">
          <h1>Você mais próximo da bancada transfusional!</h1>
            <button class="cta" onClick={() => window.location.href = '/cursos'}>
              <span>Conheça os cursos</span>
              <svg width="15px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;

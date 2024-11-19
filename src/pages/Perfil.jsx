import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './css/Perfil.css';
import estudos_banner from '../assests/images/Estudos.gif'
import curso_hemacias from '../assests/images/hemacias.gif'
import curso_primeira_temp from '../assests/images/primeira_temp.gif'
import curso_segunda_temp from '../assests/images/segunda_temp.gif'

// Importando as imagens

const Home = () => {
  return (
    <div className="perfil-container">
      <Navbar />

            {/* Seção do banner */}
            <section class="perfil-section_banner">
                <div class="perfil-texto">
                    <h2>Bem-vindo ao seu perfil!</h2>
                    <p>Aqui você encontrará aulas exclusivas, feitos pela Imuno & Hemato em parceria com a Martell.</p>            
                </div>
                <div class="perfil-imagem_banner">
                    <img src={estudos_banner} alt='Cursos'></img>
                </div>
                </section>

            {/* Seção dos cursos */}

                {/* Seção desvendando hemácias */}
                <section className="cursos-destaques-perfil">
                    <div className="card-hemacias">
                        <div className="card-details-hemacias">
                        <img src={curso_hemacias} className="img" alt="Curso Hemácias" />
                            <div className="text-container-hemacias">
                                <p className="text-title-hemacias">Desvendando o painel de hemácias</p>
                                <p className="text-body-hemacias">
                                    O curso mais direto e objetivo pra quem tem dificuldade de descobrir
                                    qual anticorpo está no painel, que parece mais uma batalha naval.
                                </p>
                            </div>
                        </div>
                        <a href="/Hemacias">
                            <button className="card-button">Acessar curso!</button>
                        </a>
                    </div>

                {/* Seção primeira temporada */}
                <div className="card-primeira">
                        <div className="card-details-primeira">
                        <img src={curso_primeira_temp} className="img" alt="Primeira temporada" />
                            <div className="text-container-primeira">
                                <p className="text-title-primeira"> Imuno e hemato: Por onde começar?</p>
                                <p className="text-body-primeira">
                                Esse curso vai te levar para os primórdios da imunologia e hematologia e te mostrar quanto é importante você saber disso pra estar na bancada.
                                </p>
                            </div>
                        </div>
                        <a href="/primeira_temp">
                            <button className="card-button">Acessar curso!</button>
                        </a>
                    </div>

                {/* Seção segunda temporada */}
                <div className="card-segunda">
                        <div className="card-details-segunda">
                        <img src={curso_segunda_temp} className="img-segunda" alt="Curso Hemácias" />
                            <div className="text-container-segunda">
                                <p className="text-title-segunda">Imuno e hemato: imuno-hematologia em sua essência. </p>
                                <p className="text-body-segunda">
                                Aqui você vai saber da essência da imuno-hemato. Vamos aprender juntos os principais conceitos de grupos sanguíneos, significado clínico dos anticorpos, técnicas dos testes pré-transfusionais e muito mais. 
                                </p>
                            </div>
                        </div>
                        <a href="/segunda_temp">
                            <button className="card-button">Acessar curso!</button>
                        </a>
                    </div>
                </section>


      <Footer />
    </div>
  );
};

export default Home;

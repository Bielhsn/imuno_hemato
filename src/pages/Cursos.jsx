// src/pages/Cursos.jsx
import React from 'react';
import Navbar from '../components/Navbar'; // Importando a Navbar
import Footer from '../components/Footer'; // Importando o Footer
import './css/Cursos.css'; // Importando o CSS da página de Cursos
import curso_banner from '../assests/images/curso_banner.gif'
import curso_hemacias from '../assests/images/hemacias.gif'
import curso_primeira_temp from '../assests/images/primeira_temp.gif'
import curso_segunda_temp from '../assests/images/segunda_temp.gif'
import curso_terceira_temp from '../assests/images/terceira_temp.gif'
import curso_rh from '../assests/images/rh.gif'
import curso_genotipagem from '../assests/images/genotipagem.gif'

const Cursos = () => {
    return (
        <div className="cursos">
            <Navbar />
            {/* Seção do banner */}
            <section class="cursos-section_banner">
                <div class="cursos-texto">
                    <h2>Educação sem distância.</h2>
                    <p>A imuno&hemato tem como principal objetivo tornar acessível o conhecimento e a educação em imuno-hematologia e hemoterapia por todos que querem e precisam aprender.</p>
                    <button className="cta-cursos" onClick={() => window.location.href = '/cursos'}>
                        <span>Conheça os cursos</span>
                        <svg width="15px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </button>                
                </div>
                <div class="cursos-imagem_banner">
                    <img src={curso_banner} alt='Cursos'></img>
                </div>
                </section>
            {/* Seção dos cursos */}

                {/* Seção desvendando hemácias */}
                <section className="cursos-destaques">
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
                        <a href="https://pay.hotmart.com/B48662820F?checkoutMode=10">
                            <button className="card-button">Inscreva-se agora!</button>
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
                        <a href="https://pay.hotmart.com/B48662820F?checkoutMode=10">
                            <button className="card-button">Inscreva-se agora!</button>
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
                        <a href="https://pay.hotmart.com/B48662820F?checkoutMode=10">
                            <button className="card-button">Inscreva-se agora!</button>
                        </a>
                    </div>
                </section>

                <section className="cursos-destaques">
                    {/* Seção terceira temporada */}
                <div className="card-hemacias">
                        <div className="card-details-hemacias">
                        <img src={curso_terceira_temp} className="img" alt="Curso Hemácias" />
                            <div className="text-container-hemacias">
                                <p className="text-title-hemacias">Imuno e hemato: para além da rotina.</p>
                                <p className="text-body-hemacias">
                                Nesse curso, você vai complementar a sua formação em imuno-hematologia e aprender de forma objetiva e com base científica a resolver problemas avançados que nos deparamos na bancada, aqueles além da rotina mesmo. 
                                </p>
                            </div>
                        </div>
                        <a href="https://pay.hotmart.com/B48662820F?checkoutMode=10">
                            <button className="card-button">Inscreva-se agora!</button>
                        </a>
                    </div>

                {/* Seção Descomplicando o sistema Rh */}
                <div className="card-primeira">
                        <div className="card-details-primeira">
                        <img src={curso_rh} className="img-rh" alt="Primeira temporada" />
                            <div className="text-container-primeira">
                                <p className="text-title-primeira"> Descomplicando o sistema Rh:</p>
                                <p className="text-body-primeira">
                                Aqui você vai conhecer bem mais sobre esse sistema que tem tanta particularidade que só mesmo quem estuda ele exclusivamente pode te contar! De forma leve e objetiva, você vai desmistificar a complexidade do Rh.
                                </p>
                            </div>
                        </div>
                        <a href="https://pay.hotmart.com/B48662820F?checkoutMode=10">
                            <button className="card-button">Inscreva-se agora!</button>
                        </a>
                    </div>

                {/* Seção Genotipagem de grupos sanguíneos */}
                <div className="card-segunda">
                        <div className="card-details-segunda">
                        <img src={curso_genotipagem} className="img" alt="Curso Hemácias" />
                            <div className="text-container-segunda">
                                <p className="text-title-segunda">Genotipagem de grupos sanguíneos: </p>
                                <p className="text-body-segunda">
                                    Como o nome já diz, vamos te mostrar todas as técnicas de genotipagem e explicar como elas funcionam, de um jeito direto e sem complicação, do jeitinho que você gosta!
                                </p>
                            </div>
                        </div>
                        <a href="https://pay.hotmart.com/B48662820F?checkoutMode=10">
                            <button className="card-button">Inscreva-se agora!</button>
                        </a>
                    </div>
                </section>
            <Footer />
        </div>
    );
};

export default Cursos;

// src/pages/curso_hemacias.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './css/curso_hemacias.css'; // Importando o CSS específico para esta página

const CursoHemacias = () => {
    return (
        <div>
            <Navbar />
            <main>
                <section className="curso-hemacias">
                    <div className="bloco-1">
                        <img src="URL_DA_IMAGEM" alt="Curso de Hemácias" />
                        <h1>Educação sem distância.</h1>
                        <a href="https://pay.hotmart.com/B48662820F?checkoutMode=10" className="botao-inscricao">Inscreva-se</a>
                    </div>
                    <div className="bloco-2">
                        <p>
                            Você sabia que 20% dos receptores previamente transfundidos que não possuem diagnóstico oncohematológico aloimunizam? 
                            Além disso, de 18 a 47% dos receptores com anemia falciforme também aloimunizam pós-transfusão. É muito anticorpo! 
                            Vamos aprender a identificar juntos.
                        </p>
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/JARf5JbPUiI" 
                            title="YouTube video" 
                            frameBorder="0" 
                            allowFullScreen
                        ></iframe>
                        <a href="https://pay.hotmart.com/B48662820F?checkoutMode=10" className="botao-inscricao">Inscreva-se</a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default CursoHemacias;
